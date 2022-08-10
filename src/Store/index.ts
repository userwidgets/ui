import { Client } from "../Client"
import { client } from "../client"
import { Me as StoreMe } from "./Me"
import { Users as StoreUsers } from "./Users"
import { Version as StoreVersion } from "./Version"

export class Store {
	#client: Client
	readonly me: StoreMe
	readonly users: StoreUsers
	readonly version: StoreVersion
	constructor(client: Client) {
		this.me = new StoreMe(client)
		this.users = new StoreUsers(client)
		this.version = new StoreVersion(client)
		this.#client = client
	}
	set onUnauthorized(value: () => Promise<boolean>) {
		this.#client.onUnauthorized = value
	}
}
export namespace Store {
	export type Me = StoreMe
	export type Users = StoreUsers
	export type Version = StoreVersion
}
export const store = new Store(client)
