import * as gracely from "gracely"
import { Client } from "../Client"
import { model } from "../model"
import { Listenable } from "./Listenable"
import { Options } from "./Options"

export class User {
	#options: Options = {}
	set options(options: Options) {
		this.#options = { ...options }
	}
	#users?: Promise<model.userwidgets.User.Readable[] | false>
	get users() {
		return this.#users ?? this.fetch()
	}
	set users(users: Promise<model.userwidgets.User.Readable[] | false>) {
		this.#users = users
	}
	#client: Client
	#self: User & Listenable<User>
	private constructor(listenable: User & Listenable<User>, client: Client) {
		this.#client = client
		this.#self = listenable
	}
	async fetch(): Promise<model.userwidgets.User.Readable[] | false> {
		return (this.#self.users = this.#client.user
			.list()
			.then(response => (gracely.Error.is(response) ? false : response)))
	}
	async updatePermissions(
		permissions: model.userwidgets.User.Permissions.Readable
	): Promise<model.userwidgets.User.Readable | false> {
		const response =
			!this.#options.user || !this.#options.organizationId
				? false
				: await this.#client.user
						.updatePermissions(this.#options.user, this.#options.organizationId, permissions)
						.then(response => (model.userwidgets.User.Readable.is(response) ? response : false))
		response && this.fetch()
		return response
	}
	static create(client: Client): User & Listenable<User> {
		const self = new Listenable<User>() as User & Listenable<User>
		return Listenable.load(new this(self, client), self)
	}
}
