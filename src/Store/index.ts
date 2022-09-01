import { Client } from "../Client"
import { client } from "../client"
import { Listenable } from "./Listenable"
import { Me, me } from "./Me"
import { Options } from "./Options"
import { Users, users } from "./Users"
import { Version } from "./Version"

export class Store {
	#options: Options
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
		this.me = me
		this.users = users
		this.version = new Version(client)
	}
	set onUnauthorized(value: () => Promise<boolean>) {
		client.onUnauthorized = value
	}
}

export const store = new Store(client)
export { Me, Users, Version }
