import { isoly } from "isoly"
import { Listenable } from "smoothly"
import { Base } from "./Base"

export class Languages extends Base<Languages> {
	#current: Languages["current"]
	get current(): isoly.Locale {
		return this.#current
	}
	set current(current: Languages["current"]) {
		this.#current = current
	}
	private constructor() {
		super()
		const locale = isoly.Locale.is(window.navigator.language) ? window.navigator.language : undefined
		const language = locale && isoly.Locale.toLanguage(locale)
		const found =
			Languages.supported.find(supported => supported == locale) ??
			(language && Languages.supported.find(supported => supported.startsWith(language)))
		this.#current = found ?? Languages.supported[0]
	}
	private static supported: [isoly.Locale, ...isoly.Locale[]] = ["en-GB", "sv-SE"]
	static create() {
		return Listenable.load(new this())
	}
}
