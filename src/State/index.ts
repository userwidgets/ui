import { Listenable, WithListenable } from "smoothly"
import { Client, client } from "../Client"
import { Applications } from "./Applications"
import { Base } from "./Base"
import { Locales } from "./Locales"
import { Me } from "./Me"
import { Organizations } from "./Organizations"
import { Users } from "./Users"

export class State extends Base<State, Client> {
	readonly locales = Locales.create()
	readonly me = Me.create(this.client)
	readonly applications = Applications.create(this.client)
	readonly organizations = Organizations.create(this.client)
	readonly users = Users.create(this.client, this.me, this.organizations)
	static create(client: Client): WithListenable<State> {
		return Listenable.load(new this(client))
	}
}
export const state = State.create(client)
;(globalThis as any).state = state
