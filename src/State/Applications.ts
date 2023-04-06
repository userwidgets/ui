import { Listenable, WithListenable } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { Client } from "../Client"
import { Base } from "./Base"

export class Applications extends Base<Applications, Client> {
	#current?: Applications["current"]
	get current(): Promise<userwidgets.Application | false> | undefined {
		return this.#current ?? this.fetch()
	}
	set current(current: Applications["current"]) {
		this.#current = current
	}
	fetch(): Promise<userwidgets.Application | false> {
		return (this.listenable.current = this.client.application
			.fetch()
			.then(response => (!userwidgets.Application.is(response) ? false : response)))
	}
	static create(client: Client): WithListenable<Applications> {
		const backend = new this(client)
		const listenable = Listenable.load(backend)
		return listenable
	}
}
