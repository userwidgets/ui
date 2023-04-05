import { Listenable, WithListenable } from "smoothly"
import { Client, client } from "../Client"
import { Applications } from "./Applications"
import { Base } from "./Base"
import { Languages } from "./Languages"
import { Me } from "./Me"
import { Options } from "./Options"
import { Organizations } from "./Organizations"

export class State extends Base<State, Client> {
	readonly Languages = Languages.create()
	readonly me = Me.create(this.client)
	readonly options = Options.create(this.me)
	readonly applications = Applications.create(this.client, this.options)
	readonly organizations = Organizations.create(this.client, this.options)
	static create(client: Client): WithListenable<State> {
		return Listenable.load(new this(client))
	}
}
export const state = State.create(client)
;(globalThis as any).state = state
