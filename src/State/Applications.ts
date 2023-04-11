import { Listenable, WithListenable } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../model"
import { Base } from "./Base"

export class Applications extends Base<Applications, model.Client> {
	#request?: Promise<Applications["current"]>
	#current?: Applications["current"]
	get current(): userwidgets.Application | false | undefined {
		return this.#current ?? (this.fetch(), undefined)
	}
	set current(current: Applications["current"]) {
		this.#current = current
	}
	async fetch(): Promise<userwidgets.Application | false> {
		const promise = (this.#request ??= this.client.application
			.fetch()
			.then(response => (!userwidgets.Application.is(response) ? false : response)))
		const result = await promise
		if (promise == this.#request)
			this.#request = undefined
		return (this.listenable.current = result) || false
	}
	static create(client: model.Client): WithListenable<Applications> {
		const backend = new this(client)
		const listenable = Listenable.load(backend)
		return listenable
	}
}
