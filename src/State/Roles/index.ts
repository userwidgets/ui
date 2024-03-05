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
		if (roles !== this.#value)
			this.#value = roles?.map(role => Role.translate(role, this.#translate))
	}
	#application?: Roles["application"]
	get application(): Roles["default"] {
		return this.#application ?? (this.calculate.application(), undefined)
	}
	set application(application: Roles["application"]) {
		this.#application = application
		if (this.admin)
			console.log("setting default in application", application), (this.listenable.default = this.#application)
	}
	#organization?: Roles["organization"]
	get organization(): Roles["default"] {
		return this.#organization ?? (this.calculate.organization(), undefined)
	}
	set organization(organization: Roles["organization"]) {
		this.#organization = organization
		if (!this.admin)
			console.log("setting default in organization", organization), (this.listenable.default = organization)
	}
	#default?: Roles["default"]
	get default(): Role[] | false | undefined {
		return this.#default ?? (this.admin ? this.application : this.organization, undefined)
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
		this.state
	}
	private calculate = {
		application: () => {
			if (!this.state.applications.current)
				this.listenable.application = false
			if (this.state.applications.current === undefined) {
				this.listenable.application = undefined
			} else if (this.state.applications.current)
				this.listenable.application = Role.from((this.state.applications.current || undefined)?.permissions ?? [])
		},
		organization: () => {
			if (!this.state.organizations.value)
				this.listenable.organization = false
			if (this.state.organizations.value === undefined)
				this.listenable.organization = undefined
			else
				this.listenable.organization = Role.from([
					...new Set((this.state.organizations.value || []).flatMap(organization => organization.permissions)),
				])
		},
	}
	private subscriptions = {
		me: (key: Me["key"]): void => {
			console.log("Roles key sub", key, this.#default)
			if (this.#default !== undefined)
				if (key !== undefined) {
					const roles = this.admin ? this.#application : this.#organization
					if (roles !== this.#default)
						this.listenable.default = roles
				} else if (key === undefined)
					this.listenable.value = undefined
		},
		organizations: (): void => {
			console.log("Roles org sub", this.state.organizations.value, this.#default)
			if (this.#default !== undefined)
				console.log("calculating organization"), this.calculate.organization()
		},
		application: (): void => {
			console.log("Roles app sub", this.state.applications.current, this.#default)
			if (this.#default !== undefined)
				console.log("calculating application"), this.calculate.application()
		},
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
		// me.listen("key", key => (listenable.key = key))
		// applications.listen("current", application => listenable.application((application || undefined)?.permissions ?? []))
		// organizations.listen("value", organizations =>
		// 	listenable.organization([
		// 		...new Set((organizations || undefined)?.flatMap(organizations => organizations.permissions)),
		// 	])
		// )
		return listenable
	}
}
