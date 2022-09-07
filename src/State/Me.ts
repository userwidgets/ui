import * as gracely from "gracely"
import { Client } from "../Client"
import { client } from "../client"
import { model } from "../model"
import { Listenable } from "./Listenable"
import { Options } from "./Options"

export class Me {
	#options: Options = {}
	set options(options: Options) {
		this.#options = { ...this.#options, ...options }
	}
	get options(): Options {
		return this.#options
	}
	#key?: Promise<model.userwidgets.User.Key | undefined>
	get key(): Promise<model.userwidgets.User.Key | undefined> | undefined {
		return this.#key
	}
	set key(key: Promise<model.userwidgets.User.Key | undefined> | undefined) {
		this.#key = key
	}
	#client: Client
	#self: Me & Listenable<Me>
	private constructor(listenable: Me & Listenable<Me>, client: Client) {
		this.#self = listenable
		this.#client = client
	}
	login(user: model.userwidgets.User.Credentials): Promise<model.userwidgets.User.Key | undefined> | undefined {
		const response = !this.#self.options.applicationId
			? undefined
			: this.#client.me.login(this.#self.options.applicationId, user)
		return (this.#self.key = !response
			? response
			: response
					.then(key => (gracely.Error.is(key) ? undefined : key))
					.then(key => (this.#self.options = { applicationId: key?.audience, user: key?.email }) && key))
	}
	join(tag: model.userwidgets.User.Tag): Promise<model.userwidgets.User.Key | undefined> {
		return (this.#key = this.#client.me
			.join(tag)
			.then(async key =>
				gracely.Error.is(key)
					? undefined
					: gracely.Result.is(key)
					? !client.key
						? undefined
						: model.userwidgets.User.Key.unpack(client.key).then(
								key => (this.#self.options = { applicationId: key?.audience, user: key?.email }) && key
						  )
					: key
			))
	}
	logout(): void {
		this.#self.options = { organizationId: undefined, user: undefined }
		this.key = undefined
		this.#client.key = undefined
		window.sessionStorage.clear()
	}
	register(
		tag: model.userwidgets.User.Tag,
		credentials: model.userwidgets.User.Credentials.Register
	): Promise<model.userwidgets.User.Key | undefined> {
		return (this.#self.key = this.#client.me
			.register(tag, credentials)
			.then(response => (gracely.Error.is(response) ? undefined : response)))
	}
	static create(client: Client): Me & Listenable<Me> {
		const listenable = new Listenable<Me>() as Me & Listenable<Me>
		Listenable.load(new this(listenable as typeof listenable & Me, client), listenable)
		client.key &&
			(listenable.key = model.userwidgets.User.Key.unpack(client.key).then(
				key => (listenable.options = { applicationId: key?.audience, user: key?.email }) && key
			))
		client.onUnauthorized = () => {
			client.key &&
				(listenable.key = model.userwidgets.User.Key.unpack(client.key).then(
					key => (listenable.options = { applicationId: key?.audience, user: key?.email }) && key
				))
			return client.key ? new Promise(resolve => resolve(true)) : new Promise(resolve => resolve(false))
		}
		return listenable
	}
}
