import { Listenable, WithListenable } from "smoothly"
import { client } from "../Client"
import { model } from "../model"
import { Applications as StateApplications } from "./Applications"
import { Base } from "./Base"
import { Locales } from "./Locales"
import { Me as StateMe } from "./Me"
import { Organizations as StateOrganizations } from "./Organizations"
import { Users as StateUsers } from "./Users"
export class State extends Base<State, model.Client> {
	readonly locales = Locales.create()
	readonly me = State.Me.create(this.client)
	readonly applications = State.Applications.create(this.client)
	readonly organizations = State.Organizations.create(this.client)
	readonly users = State.Users.create(this.client, this.me, this.organizations)
	static create(client: model.Client): WithListenable<State> {
		return Listenable.load(new this(client))
	}
}
export namespace State {
	export type Applications = StateApplications
	export const Applications = StateApplications
	export type Organizations = StateOrganizations
	export const Organizations = StateOrganizations
	export type Me = StateMe
	export const Me = StateMe
	export type Users = StateUsers
	export const Users = StateUsers
}
export const state = State.create(client)
;(globalThis as any).state = state
