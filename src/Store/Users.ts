import * as gracely from "gracely"
import { Client } from "../Client"
import { client } from "../client"
import { model } from "../model"
import { Listenable } from "./Listenable"
import { Options } from "./Options"

export class Users {
	#options?: Options
	set options(options: Options) {
		options.organizationId != this.#options?.organizationId && (this.#users = undefined)
		this.#options = options
	}
	#users?: Promise<model.userwidgets.User[] | undefined>
	get users() {
		return this.#users ?? this.client.user.list().then(response => (gracely.Error.is(response) ? undefined : response))
	}
	set users(users: Promise<model.userwidgets.User[] | undefined>) {
		this.#users = users
	}
	constructor(private readonly client: Client, options?: Options) {
		options && (this.options = options)
	}
}

export const users = Listenable.load(new Users(client))
