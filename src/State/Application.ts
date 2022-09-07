import * as  gracely from "gracely"
import { Client } from "../Client"
import { model } from "../model"
import { Listenable } from "./Listenable"
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
	#client: Client
	#self: Application & Listenable<Application>
	constructor(listenable: Application & Listenable<Application>, client: Client) {
		this.#client = client
		this.#self = listenable
	}
	static create(client: Client): Application & Listenable<Application> {
		const listenable = new Listenable<Application>() as Application & Listenable<Application>
		return Listenable.load(new this(listenable, client), listenable)
	}
}
