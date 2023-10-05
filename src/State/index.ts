import { smoothly } from "smoothly"
import { ClientCollection } from "@userwidgets/model"
import { Applications as StateApplications } from "./Applications"
import { Locales as StateLocales } from "./Locales"
import { Me as StateMe } from "./Me"
import { Organizations as StateOrganizations } from "./Organizations"
import { Roles as StateRoles } from "./Roles"
import { Users as StateUsers } from "./Users"

export class State extends smoothly.StateBase<State, ClientCollection> {
	readonly locales = State.Locales.create()
	readonly me = State.Me.create(this.client)
	readonly applications = State.Applications.create(this.client, this.me)
	readonly organizations = State.Organizations.create(this.client, this.me)
	readonly roles = State.Roles.create(this.locales, this.applications)
	readonly users = State.Users.create(this.client, this.me, this.organizations)
	static create(client: ClientCollection): smoothly.WithListenable<State> {
		return smoothly.Listenable.load(new this(client))
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
	export type Locales = StateLocales
	export const Locales = StateLocales
	export type Roles = StateRoles
	export const Roles = StateRoles
}
