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
	#admin = false
	private set key(key: Me["key"]) {
		this.#admin = !!(key && userwidgets.User.Permissions.check(key.permissions, "*", "user.edit"))
		const roles = this.#admin ? this.#application : this.#organization
		if (roles != this.#default)
			this.listenable.default = roles
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
		if (old != this.#translator.custom)
			this.listenable.value = this.#value
	}
	#language?: Roles["language"]
	set language(language: Locales["language"]) {
		const old = this.#language
		this.#language = language
		this.#translate.custom = this.#language && this.#translator.custom?.(this.#language)
		this.#translate.default = this.#language && this.#translator.default?.(this.#language)
		if (old != this.#language) {
			this.listenable.default = this.#default
			this.listenable.value = this.#value
		}
	}

	#value?: Roles["value"]
	get value(): Role[] | undefined {
		return this.#value ?? this.default
	}
	set value(roles: Roles["value"]) {
		if (roles != this.#value)
			this.#value = roles?.map(role => Role.translate(role, this.#translate))
	}
	#application?: Roles["default"]
	#organization?: Roles["default"]
	#default?: Roles["default"]
	get default(): Role[] | undefined {
		return this.#default
	}
	set default(roles: Roles["default"]) {
		if (roles != this.#default)
			this.#default = roles?.map(role => Role.translate(role, this.#translate))
	}
	private organization(permissions: string[]): void {
		this.#organization = Role.from(permissions)
		if (!this.#admin) {
			this.listenable.default = this.#organization
			this.#organization = this.#default
		}
	}
	private application(permissions: string[]): void {
		this.#application = Role.from(permissions)
		if (this.#admin) {
			this.listenable.default = this.#application
			this.#application = this.#default
		}
	}
	static create(
		locales: smoothly.WithListenable<Locales>,
		me: smoothly.WithListenable<Me>,
		applications: smoothly.WithListenable<Applications>,
		organizations: smoothly.WithListenable<Organizations>
	): smoothly.WithListenable<Roles> {
		const backend = new this()
		const listenable = smoothly.Listenable.load(backend)
		locales.listen("language", language => (listenable.language = language))
		me.listen("key", key => (listenable.key = key))
		applications.listen("current", application => listenable.application((application || undefined)?.permissions ?? []))
		organizations.listen("value", organizations =>
			listenable.organization([
				...new Set((organizations || undefined)?.flatMap(organizations => organizations.permissions)),
			])
		)
		return listenable
	}
}
