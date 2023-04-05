import { Listenable, WithListenable } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { Base } from "./Base"
import { Me } from "./Me"

export class Options extends Base<Options> {
	#value: Options["value"] = {}
	get value(): { key?: Options["key"]; organization?: Options["organization"] } {
		return this.#value
	}
	set value(value: Options["value"]) {
		this.#value = value
		if (this.key != value.key)
			this.listenable.key = value.key
		if (this.organization != value.organization)
			this.listenable.organization = value.organization
	}
	#key?: Options["key"]
	get key(): userwidgets.User.Key | undefined {
		return this.#key
	}
	set key(key: Options["key"]) {
		if (this.#key != key) {
			this.#key = key
			this.update({ key: key })
		}
	}
	#organization?: Options["organization"]
	get organization(): string | undefined {
		return this.#organization
	}
	set organization(organization: Options["organization"]) {
		if (this.#organization != organization) {
			this.#organization = organization
			this.update({ organization: organization })
		}
	}
	update(options: Partial<Options["value"]>): Options["value"] {
		this.listenable.value = { ...this.value, ...options }
		return this.value
	}
	static create(me: WithListenable<Me>): WithListenable<Options> {
		const backend = new this()
		const listenable = Listenable.load(backend)
		me.listen("key", async promise => {
			const key = await promise
			listenable.key = key || undefined
		})
		return listenable
	}
}
