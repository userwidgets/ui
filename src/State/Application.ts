import * as gracely from "gracely"
import { Client } from "../Client"
import { model } from "../model"
import { Listenable } from "./Listenable"
import { Me } from "./Me"
import { Options } from "./Options"

export class Application {
	#options: Options = {}
	get options(): Options {
		return this.#options
	}
	set options(options: Options) {
		options.applicationId != this.#options?.applicationId &&
			((this.#options = { ...options }),
			this.#application && this.#options.applicationId && this.fetch(),
			(this.#application = undefined))
	}
	#application?: Promise<model.userwidgets.Application | false>
	get application(): Promise<model.userwidgets.Application | false> | undefined {
		return this.#application ?? this.fetch()
	}
	set application(application: Promise<model.userwidgets.Application | false> | undefined) {
		this.#application = application
	}
	get me(): Me & Listenable<Me> {
		return this.#me
	}
	#client: Client
	#self: Application & Listenable<Application>
	#me: Me & Listenable<Me>
	private constructor(listenable: Application & Listenable<Application>, client: Client, me: Me & Listenable<Me>) {
		this.#client = client
		this.#self = listenable
		this.#me = me
	}
	fetch(): Promise<model.userwidgets.Application | false> | undefined {
		return (this.#self.application = this.#client.application
			.fetch()
			.then(response => (gracely.Error.is(response) ? false : response)))
	}
	static create(client: Client, me: Me & Listenable<Me>): Application & Listenable<Application> {
		const self = new Listenable<Application>() as Application & Listenable<Application>
		Listenable.load(new this(self, client, me), self)
		self.me.listen("key", key =>
			key?.then(
				() =>
					(self.application = client.application
						.fetch()
						.then(response => (gracely.Error.is(response) ? false : response)))
			)
		)
		return self
	}
}
