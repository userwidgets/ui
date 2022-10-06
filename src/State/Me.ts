import * as gracely from "gracely"
import { Client } from "../Client"
import { model } from "../model"
import { Listenable } from "./Listenable"
import { Options } from "./Options"

export class Me {
	#options: Options = {}
	get options(): Options {
		return this.#options
	}
	set options(options: Options) {
		this.#options = { ...this.#options, ...options }
	}
	#key?: Promise<model.userwidgets.User.Key | false>
	get key(): Promise<model.userwidgets.User.Key | false> | undefined {
		return this.#key
	}
	set key(key: Promise<model.userwidgets.User.Key | false> | undefined) {
		this.#key = key
	}
	#client: Client
	#self: Me & Listenable<Me>
	private constructor(listenable: Me & Listenable<Me>, client: Client) {
		this.#self = listenable
		this.#client = client
	}
	async login(user: model.userwidgets.User.Credentials): Promise<model.userwidgets.User.Key | false> {
		const promise = !this.#self.options.applicationId
			? undefined
			: this.#client.me
					.login(this.#self.options.applicationId, user)
					.then(response => (gracely.Error.is(response) ? false : response))
		const response = await promise
		response &&
			(this.#self.key = promise) &&
			(this.#self.options = { applicationId: response.audience, user: response.email })
		return response ? response : false
	}
	async join(tag: model.userwidgets.User.Tag): Promise<model.userwidgets.User.Key | false> {
		const promise = this.#client.me
			.join(tag)
			.then(async key =>
				gracely.Error.is(key)
					? false
					: gracely.Result.is(key)
					? !this.#client.key
						? false
						: model.userwidgets.User.Key.unpack(this.#client.key).then(key =>
								key ? (this.#self.options = { applicationId: key?.audience, user: key?.email }) && key : false
						  )
					: key
			)
		const response = await promise
		response && (this.#self.key = promise)
		return response ? response : false
	}
	logout(): void {
		window.sessionStorage.clear()
		this.#client.key = undefined
		this.key = undefined
		this.#self.options = { organizationId: undefined, user: undefined }
	}
	async register(
		tag: model.userwidgets.User.Tag,
		credentials: model.userwidgets.User.Credentials.Register
	): Promise<model.userwidgets.User.Key | false> {
		const promise = this.#client.me
			.register(tag, credentials)
			.then(response => (gracely.Error.is(response) ? false : response))
		const response = await promise
		response && (this.#self.key = promise)
		return response
	}
	static create(client: Client): Me & Listenable<Me> {
		const self = new Listenable<Me>() as Me & Listenable<Me>
		Listenable.load(new this(self, client), self)
		client.key &&
			(self.key = model.userwidgets.User.Key.unpack(client.key).then(key =>
				key ? (self.options = { applicationId: key?.audience, user: key?.email }) && key : false
			))
		return self
	}
}
