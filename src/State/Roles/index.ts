import { isoly } from "isoly"
import { langly } from "langly"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { Applications } from "../Applications"
import { Locales } from "../Locales"
import { Me } from "../Me"
import { Organizations } from "../Organizations"
import { Role } from "./Role"
import * as translation from "./translation"

export class Roles extends smoothly.StateBase<Roles> {
	private get admin(): boolean {
		return !!(this.state.me.key && userwidgets.User.Permissions.check(this.state.me.key.permissions, "*", "user.edit"))
	}
	#translate: Role.Translate = {}
	#translator: {
		default: Roles["translator"]
		custom?: Roles["translator"]
	} = { default: translation.create }
	set translator(translator: (language: isoly.Language) => langly.Translate | undefined) {
		const old = this.#translator.custom
		this.#translator.custom = translator
		this.#translate.custom = this.#language && this.#translator.custom?.(this.#language)
		if (old !== this.#translator.custom)
			this.listenable.value = this.#value
	}
	#language?: Roles["language"]
	set language(language: Locales["language"]) {
		const old = this.#language
		this.#language = language
		this.#translate.custom = this.#language && this.#translator.custom?.(this.#language)
		this.#translate.default = this.#language && this.#translator.default?.(this.#language)
		if (old !== this.#language) {
			this.listenable.default = this.#default
			this.listenable.value = this.#value
		}
	}

	#value?: Roles["value"]
	get value(): Role[] | undefined {
		return this.#value ?? (this.default || undefined)
	}
	set value(roles: Roles["value"]) {
		if (roles !== undefined && roles !== this.#value) {
			this.#value = roles?.map(role => Role.translate(role, this.#translate))
		}
	}
	#application?: Roles["application"] = undefined
	get application(): Roles["default"] {
		return this.#application ?? (this.calculate.application(), undefined)
	}
	set application(roles: Roles["application"]) {
		this.#application = roles
		if (this.admin)
			this.listenable.default = this.#application
	}
	#organization?: Roles["organization"] = undefined
	get organization(): Roles["default"] {
		return this.#organization ?? (this.calculate.organization(), undefined)
	}
	set organization(roles: Roles["organization"]) {
		this.#organization = roles
		if (!this.admin)
			this.listenable.default = roles
	}
	#default?: Roles["default"]
	get default(): Role[] | false | undefined {
		return this.#default ?? (this.admin ? this.application : this.organization)
	}
	set default(roles: Roles["default"]) {
		if (roles !== this.#default)
			this.#default = (roles || []).map(role => Role.translate(role, this.#translate))
	}
	private constructor(
		private state: {
			me: smoothly.WithListenable<Me>
			organizations: smoothly.WithListenable<Organizations>
			applications: smoothly.WithListenable<Applications>
		}
	) {
		super()
	}
	private calculate = {
		application: () => {
			if (!this.state.applications.current)
				this.#application !== false && (this.listenable.application = false)
			else
				this.listenable.application = Role.from(this.state.applications.current.permissions)
		},
		organization: () => {
			if (!this.state.organizations.value)
				this.#organization !== false && (this.listenable.organization = false)
			else
				this.listenable.organization = Role.from([
					...new Set((this.state.organizations.value || []).flatMap(organization => organization.permissions)),
				])
		},
	}
	private subscriptions = {
		me: (key: Me["key"]) => {
			const roles = this.admin ? this.#application : this.#organization
			if (roles !== undefined)
				if (key !== undefined && roles !== this.default)
					this.listenable.default = roles
				else if (key === undefined)
					this.listenable.value = undefined
		},
		organizations: () => this.#organization !== undefined && this.calculate.organization(),
		application: () => this.#application !== undefined && this.calculate.application(),
		default: (rules: Roles["default"]) =>
			!this.#value === undefined && rules != this.#value && (this.listenable.value = this.#value),
	}
	static create(
		locales: smoothly.WithListenable<Locales>,
		me: smoothly.WithListenable<Me>,
		applications: smoothly.WithListenable<Applications>,
		organizations: smoothly.WithListenable<Organizations>
	): smoothly.WithListenable<Roles> {
		const backend = new this({ me, organizations, applications })
		const listenable = smoothly.Listenable.load(backend)
		locales.listen("language", language => (listenable.language = language))
		me.listen("key", key => backend.subscriptions.me(key), { lazy: true })
		organizations.listen("value", () => backend.subscriptions.organizations(), { lazy: true })
		applications.listen("current", () => backend.subscriptions.application(), { lazy: true })
		listenable.listen("default", rules => backend.subscriptions.default(rules), { lazy: true })
		return listenable
	}
}
