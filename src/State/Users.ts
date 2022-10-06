import * as gracely from "gracely"
import { Client } from "../Client"
import { model } from "../model"
import { Listenable } from "./Listenable"
import { Options } from "./Options"

export class Users {
	#options: Options = {}
	set options(options: Options) {
		options.organizationId != this.#options?.organizationId && (this.#users = undefined)
		this.#options = { ...options }
	}
	#users?: Promise<model.userwidgets.User[] | false>
	get users() {
		return (
			this.#users ??
			(this.#self.users = this.#client.user.list().then(response => (gracely.Error.is(response) ? false : response)))
		)
	}
	set users(users: Promise<model.userwidgets.User[] | false>) {
		this.#users = users
	}
	#client: Client
	#self: Users & Listenable<Users>
	constructor(listenable: Users & Listenable<Users>, client: Client) {
		this.#client = client
		this.#self = listenable
	}
	static create(client: Client): Users & Listenable<Users> {
		const self = new Listenable<Users>() as Users & Listenable<Users>
		return Listenable.load(new this(self, client), self)
	}
}
