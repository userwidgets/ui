import { Listenable, WithListenable } from "smoothly"
import { Client, client } from "../Client"
import { Applications } from "./Applications"
import { Base } from "./Base"
import { Locales } from "./Locales"
import { Me } from "./Me"
import { Options } from "./Options"
import { Organizations } from "./Organizations"
import { Users } from "./Users"

export class State extends Base<State, Client> {
	readonly locales = Locales.create()
	readonly me = Me.create(this.client)
	readonly users = Users.create(this.client)
	readonly options = Options.create(this.me)
	readonly applications = Applications.create(this.client, this.options)
	readonly organizations = Organizations.create(this.client, this.users, this.options)
	static create(client: Client): WithListenable<State> {
		return Listenable.load(new this(client))
	}
}
export const state = State.create(client)
;(globalThis as any).state = state
