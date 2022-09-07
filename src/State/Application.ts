import * as gracely from "gracely"
import { Client } from "../Client"
import { model } from "../model"
import { Listenable } from "./Listenable"
import { Me } from "./Me"
import { Options } from "./Options"

export class Application {
	#options: Options = {}
	set options(options: Options) {
		options.applicationId != this.#options?.applicationId && (this.#application = undefined)
		this.#options = options
	}
	#application?: Promise<model.userwidgets.Application | undefined>
	get application() {
		return (
			this.#application ??
			(this.#self.application = this.#client.application
				.fetch()
				.then(response => (gracely.Error.is(response) ? undefined : response)))
		)
	}
	set application(application: Promise<model.userwidgets.Application | undefined>) {
		this.#application = application
	}
	get me(): Me & Listenable<Me> {
		return this.#me
	}
	#client: Client
	#self: Application & Listenable<Application>
	#me: Me & Listenable<Me>
	constructor(listenable: Application & Listenable<Application>, client: Client, me: Me & Listenable<Me>) {
		this.#client = client
		this.#self = listenable
		this.#me = me
	}
	static create(client: Client, me: Me & Listenable<Me>): Application & Listenable<Application> {
		const listenable = new Listenable<Application>() as Application & Listenable<Application>
		Listenable.load(new this(listenable, client, me), listenable)
		listenable.me.listen("key", key =>
			key?.then(
				() =>
					(listenable.application = client.application
						.fetch()
						.then(response => (gracely.Error.is(response) ? undefined : response)))
			)
		)
		return listenable
	}
}
