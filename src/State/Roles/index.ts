import { isoly } from "isoly"
import { langly } from "langly"
import { smoothly } from "smoothly"
import { Applications } from "../Applications"
import { Locales } from "../Locales"
import { Role } from "./Role"
import * as translation from "./translation"

export class Roles extends smoothly.StateBase<Roles> {
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
		this.#value = roles?.map(role => Role.translate(role, this.#translate))
	}
	#default?: Roles["default"]
	get default(): Role[] | undefined {
		return this.#default
	}
	set default(roles: Roles["default"]) {
		this.#default = roles?.map(role => Role.translate(role, this.#translate))
	}
	private permissions(permissions: string[] | undefined): void {
		this.listenable.default = permissions?.map(permission => ({
			permissions: id => `${id}.${permission}`,
			label: (permission.at(0)?.toLocaleUpperCase() ?? "") + permission.slice(1).split(".").join(" "),
		}))
	}
	static create(
		locales: smoothly.WithListenable<Locales>,
		applications: smoothly.WithListenable<Applications>
	): smoothly.WithListenable<Roles> {
		const backend = new this()
		const listenable = smoothly.Listenable.load(backend)
		locales.listen("language", language => (listenable.language = language))
		applications.listen("current", application => listenable.permissions((application || undefined)?.permissions))
		return listenable
	}
}
