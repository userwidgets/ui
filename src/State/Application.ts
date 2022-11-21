import * as gracely from "gracely"
import { Client } from "../Client"
import { model } from "../model"
import { Listenable } from "./Listenable"
import { Options } from "./Options"

export class Application {
	#options: Options = {}
	get options(): Options {
		return this.#options
	}
	set options(options: Options) {
		options = { ...this.options, ...options }
		options.applicationId == undefined
			? (this.#application = undefined)
			: !this.#options.key == undefined
			? ((this.#application = undefined), this.fetch())
			: options.key == undefined
			? (this.#application = undefined)
			: this.#options.key != options.key && this.fetch()
		this.#options = options
	}
	#application?: Promise<model.userwidgets.Application | false>
	get application(): Promise<model.userwidgets.Application | false> | undefined {
		return this.#application ?? this.fetch()
	}
	set application(application: Promise<model.userwidgets.Application | false> | undefined) {
		this.#application = application
	}
	#self: Application & Listenable<Application>
	private constructor(listenable: Application & Listenable<Application>, private client: Client) {
		this.#self = listenable
	}
	fetch(): Promise<model.userwidgets.Application | false> {
		return (this.#self.application = this.client.application
			.fetch()
			.then(response => (gracely.Error.is(response) ? false : response)))
	}
	static create(client: Client): Application & Listenable<Application> {
		const self = new Listenable<Application>() as Application & Listenable<Application>
		return Listenable.load(new this(self, client), self)
	}
}
