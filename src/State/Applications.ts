import { Listenable, WithListenable } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { Client } from "../Client"
import { Base } from "./Base"
import { Options } from "./Options"

export class Applications extends Base<Applications, Client> {
	#options: Applications["options"] = {}
	private get options(): Options["value"] {
		return this.#options
	}
	private set options(options: Applications["options"]) {
		this.#options = options
	}
	#current?: Applications["current"]
	get current(): Promise<userwidgets.Application | false> | undefined {
		return this.#current
	}
	set current(current: Applications["current"]) {
		this.#current = current
	}
	fetch(): Promise<userwidgets.Application | false> {
		return (this.listenable.current = this.client.application
			.fetch()
			.then(response => (!userwidgets.Application.is(response) ? false : response)))
	}
	static create(client: Client, options: WithListenable<Options>): WithListenable<Applications> {
		const backend = new this(client)
		const listenable = Listenable.load(backend)
		options.listen("value", options => (backend.options = options))
		return listenable
	}
}
