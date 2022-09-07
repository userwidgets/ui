import * as gracely from "gracely"
import { Client } from "../Client"
import { model } from "../model"
import { Listenable } from "./Listenable"
import { Options } from "./Options"

export class Users {
	#options: Options = {}
	set options(options: Options) {
		options.organizationId != this.#options?.organizationId && (this.#users = undefined)
		this.#options = options
	}
	#users?: Promise<model.userwidgets.User[] | undefined>
	get users() {
		return (
			this.#users ??
			(this.#self.users = this.#client.user
				.list()
				.then(response => (gracely.Error.is(response) ? undefined : response)))
		)
	}
	set users(users: Promise<model.userwidgets.User[] | undefined>) {
		this.#users = users
	}
	#client: Client
	#self: Users & Listenable<Users>
	constructor(listenable: Users & Listenable<Users>, client: Client) {
		this.#client = client
		this.#self = listenable
	}
	static create(client: Client): Users & Listenable<Users> {
		const listenable = new Listenable<Users>() as Users & Listenable<Users>
		return Listenable.load(new this(listenable, client), listenable)
	}
}
