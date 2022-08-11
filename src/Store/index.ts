import { Client } from "../Client"
import { client } from "../client"
import { Me } from "./Me"
import { Users } from "./Users"
import { Version } from "./Version"

export class Store {
	#client: Client
	readonly me: Me
	readonly users: Users
	readonly version: Version
	constructor(client: Client) {
		this.me = new Me(client)
		this.users = new Users(client)
		this.version = new Version(client)
		this.#client = client
	}
	set onUnauthorized(value: () => Promise<boolean>) {
		this.#client.onUnauthorized = value
	}
}

export const store = new Store(client)

export { Me, Users, Version }
