import * as gracely from "gracely"
import { isoly } from "isoly"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"
import { model } from "../model"
import { Application as ClientApplication } from "./Application"
import { Me as ClientMe } from "./Me"
import { Organization as ClientOrganization } from "./Organization"
import { User as ClientUser } from "./User"

export interface EntityTags {
	application: Record<string, isoly.DateTime | undefined>
	organization: Record<string, isoly.DateTime | undefined>
	user: Record<string, isoly.DateTime | undefined>
}

const url = new URL(window.location.href)
const backend =
	url.searchParams.get("backend") ??
	(url.hostname == "localhost" || url.hostname == "127.0.0.1" ? "http://localhost:8788" : "https://api.userwidgets.com")
const token = window.sessionStorage.getItem("token") ?? undefined

export class Client extends rest.Client<gracely.Error> {
	entityTags: EntityTags = { application: {}, organization: {}, user: {} }
	readonly user = new Client.User(this.client, this.entityTags)
	readonly me = new Client.Me(this.client)
	readonly organization = new Client.Organization(this.client, this.entityTags)
	readonly application = new Client.Application(this.client, this.entityTags)
	static create<T = Record<string, any>, Error = never>(
		url?: string,
		key?: string,
		load?: (connection: http.Client) => T
	): Client & T {
		const client = new http.Client<Error>(url, key)
		const result = new this(client)
		if (load)
			Object.assign(result, load(client))
		return result as Client & T
	}
	onUnauthorized?: (client: rest.Client<never>) => Promise<boolean>
}
export namespace Client {
	export type Application = ClientApplication
	export const Application = ClientApplication
	export type Organization = ClientOrganization
	export const Organization = ClientOrganization
	export type Me = ClientMe
	export const Me = ClientMe
	export type User = ClientUser
	export const User = ClientUser
	export type Unauthorized = (client: rest.Client<never>) => Promise<boolean>
}
export const client = Client.create<model.Client>(backend, token)
