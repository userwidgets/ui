import * as gracely from "gracely"
import { Client } from "../Client"
import { client } from "../client"
import { model } from "../model"
import { Options } from "./Options"

export class Me {
	#options: Options = {}
	set options(options: Options) {
		this.options.applicationId != undefined &&
			options.applicationId != this.#options?.applicationId &&
			(this.key = undefined)
		this.#options = options
	}
	get options(): Options {
		return this.#options ?? {}
	}
	#key?: Promise<model.userwidgets.User.Key | undefined>
	get key(): Promise<model.userwidgets.User.Key | undefined> | undefined {
		return this.#key
	}
	set key(key: Promise<model.userwidgets.User.Key | undefined> | undefined) {
		this.#key = key
	}
	constructor(private readonly client: Client) {
		client.key &&
			(this.key = model.userwidgets.User.Key.unpack(client.key).then(key => {
				return (this.options = { applicationId: key?.audience }) && key
			}))
		this.client.onUnauthorized = () => {
			client.key &&
				(this.key = model.userwidgets.User.Key.unpack(client.key).then(
					key => (this.options = { applicationId: key?.audience }) && key
				))
			return client.key ? new Promise(resolve => resolve(true)) : new Promise(resolve => resolve(false))
		}
	}
	login(user: model.userwidgets.User.Credentials): Promise<model.userwidgets.User.Key | undefined> | undefined {
		const response = !this.#options?.applicationId ? undefined : this.client.me.login(this.#options.applicationId, user)
		return (this.key = !response
			? response
			: response
					.then(key => (gracely.Error.is(key) ? undefined : key))
					.then(key => (this.options = { applicationId: key?.audience }) && key))
	}
	join(tag: model.userwidgets.User.Tag): Promise<model.userwidgets.User.Key | undefined> {
		return (this.key = this.client.me
			.join(tag)
			.then(async key =>
				gracely.Error.is(key)
					? undefined
					: gracely.Result.is(key)
					? !client.key
						? undefined
						: model.userwidgets.User.Key.unpack(client.key).then(
								key => (this.options = { applicationId: key?.audience }) && key
						  )
					: key
			))
	}
	register(
		tag: model.userwidgets.User.Tag,
		credentials: model.userwidgets.User.Credentials.Register
	): Promise<model.userwidgets.User.Key | undefined> {
		return (this.key = this.client.me
			.register(tag, credentials)
			.then(response => (gracely.Error.is(response) ? undefined : response)))
	}
}
