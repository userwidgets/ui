import * as gracely from "gracely"
import { Client } from "../Client"
import { model } from "../model"
import { Listenable } from "./Listenable"
import { Options } from "./Options"

export class User {
	#options: Options = {}
	get options(): Options {
		return this.#options
	}
	set options(options: Options) {
		this.#options = { ...options }
		this.#users != undefined && this.#options.key ? this.fetch() : (this.#self.users = undefined)
	}
	#users?: Promise<model.userwidgets.User.Readable[] | false>
	get users(): Promise<model.userwidgets.User.Readable[] | false> | undefined {
		return this.#users ?? this.fetch()
	}
	set users(users: Promise<model.userwidgets.User.Readable[] | false> | undefined) {
		this.#users = users
	}
	#self: User & Listenable<User>
	private constructor(listenable: User & Listenable<User>, private client: Client) {
		this.#self = listenable
	}
	fetch(): Promise<model.userwidgets.User.Readable[] | false> {
		return (this.#self.users = this.client.user
			.list()
			.then(response => (gracely.Error.is(response) ? false : response)))
	}
	async updatePermissions(
		email: string,
		permissions: model.userwidgets.User.Permissions.Readable
	): Promise<model.userwidgets.User.Readable | false> {
		const response = !this.#options.organizationId
			? false
			: await this.client.user
					.updatePermissions(email, this.#options.organizationId, permissions)
					.then(response => (model.userwidgets.User.Readable.is(response) ? response : false))
		response && this.fetch()
		return response
	}
	static create(client: Client): User & Listenable<User> {
		const self = new Listenable<User>() as User & Listenable<User>
		return Listenable.load(new this(self, client), self)
	}
}
