import { isoly } from "isoly"
import { Listenable } from "smoothly"
import { Base } from "./Base"

export class Locales extends Base<Locales> {
	#current: Locales["current"]
	get current(): isoly.Locale {
		return this.#current
	}
	set current(current: Locales["current"]) {
		this.#current = current
	}
	#language: Locales["language"]
	get language(): isoly.Language {
		return this.#language
	}
	private set language(language: Locales["language"]) {
		this.#language = language
	}
	private constructor() {
		super()
		const locale = isoly.Locale.is(window.navigator.language) ? window.navigator.language : undefined
		const language = locale && isoly.Locale.toLanguage(locale)
		const found =
			Locales.supported.find(supported => supported == locale) ??
			(language && Locales.supported.find(supported => supported.startsWith(language)))
		this.current = found ?? Locales.supported[0]
	}
	private static supported: [isoly.Locale, ...isoly.Locale[]] = ["en-GB", "sv-SE"]
	static create() {
		return Listenable.load(new this())
	}
}
