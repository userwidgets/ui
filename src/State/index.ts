import { Client } from "../Client"
import { client } from "../client"
import { Listenable } from "./Listenable"
import { Me } from "./Me"
import { Options } from "./Options"
import { Users } from "./Users"
import { Version } from "./Version"

export class State {
	#options: Options = {}
	set options(options: Options) {
		this.#options = { ...this.#options, ...options }
		this.users.options = this.options
		this.me.options = this.options
	}
	get options() {
		return this.#options
	}
	readonly me: Listenable<Me> & Me
	readonly users: Listenable<Users> & Users
	readonly version: Version
	constructor(client: Client) {
		this.me = Me.create(client)
		this.users = Users.create(client)
		this.version = new Version(client)
		this.me.listen("options", options => (this.#options = options) && (this.users.options = this.#options))
	}
	set onUnauthorized(value: () => Promise<boolean>) {
		client.onUnauthorized = value
	}
}

export const state = new State(client)
export { Me, Users, Version }
