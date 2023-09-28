import { isoly } from "isoly"
import { smoothly } from "smoothly"

export class Locales extends smoothly.StateBase<Locales> {
	#current: Locales["current"]
	get current(): isoly.Locale {
		return this.#current
	}
	set current(current: Locales["current"]) {
		if (Locales.supported.includes(current)) {
			this.#current = current
			this.listenable.language = isoly.Locale.toLanguage(this.#current)
		}
	}
	#language: Locales["language"]
	get language(): isoly.Language | undefined {
		return this.#language
	}
	private set language(language: Locales["language"]) {
		this.#language = language
	}
	private static supported: [isoly.Locale, ...isoly.Locale[]] = ["en-GB", "sv-SE"]
	static create() {
		const backend = new this()
		const listenable = smoothly.Listenable.load(backend)

		const locale = isoly.Locale.is(window.navigator.language) ? window.navigator.language : undefined
		const language = locale && isoly.Locale.toLanguage(locale)
		const found =
			Locales.supported.find(supported => supported == locale) ??
			(language && Locales.supported.find(supported => supported.startsWith(language)))
		listenable.current = found ?? Locales.supported[0]
		return listenable
	}
}
