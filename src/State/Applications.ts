import { Listenable, WithListenable } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../model"
import { Base } from "./Base"
import { Me } from "./Me"

export class Applications extends Base<Applications, model.Client> {
	#request?: Promise<Applications["current"]>
	private set key(key: Me["key"]) {
		if (this.current != undefined)
			if (key != undefined)
				this.fetch()
			else if (key == undefined)
				this.listenable.current = undefined
	}
	#current?: Applications["current"]
	get current(): userwidgets.Application | false | undefined {
		return this.#current ?? (this.fetch(), undefined)
	}
	set current(current: Applications["current"]) {
		this.#current = current
	}
	private constructor(client: model.Client, private me: WithListenable<Me>) {
		super(client)
	}
	async fetch(): Promise<userwidgets.Application | false> {
		const promise = !this.me.key
			? undefined
			: (this.#request ??= this.client.application
					.fetch()
					.then(response => (!userwidgets.Application.is(response) ? false : response)))
		const result = await promise
		if (promise == this.#request)
			this.#request = undefined
		return (this.listenable.current = result) || false
	}
	static create(client: model.Client, me: WithListenable<Me>): WithListenable<Applications> {
		const backend = new this(client, me)
		const listenable = Listenable.load(backend)
		me.listen("key", key => (backend.key = key))
		return listenable
	}
}
