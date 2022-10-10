import { Client } from "../Client"
import { client } from "../client"
import { Application } from "./Application"
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
		this.application.options = this.options
	}
	get options() {
		return this.#options
	}
	set onUnauthorized(value: () => Promise<boolean>) {
		this.#client.onUnauthorized = value
	}
	readonly me: Listenable<Me> & Me
	readonly users: Listenable<Users> & Users
	readonly application: Listenable<Application> & Application
	readonly version: Version
	#client: Client
	constructor(client: Client) {
		this.me = Me.create(client)
		this.users = Users.create(client)
		this.application = Application.create(client, this.me)
		this.version = new Version(client)
		this.me.listen("options", options => (this.#options = { ...options }) && (this.users.options = this.#options))
		this.#client = client
	}
}

export const state = new State(client)

const appUrl = new URL(window.location.href)
let applicationId: string | undefined
try {
	applicationId = appUrl.searchParams.get("applicationId") ?? process.env.applicationId ?? window.origin
} catch (e) {
	applicationId = undefined
}
state.options = { applicationId: applicationId }

export { Me, Users, Version }
