import * as gracely from "gracely"
import { isoly } from "isoly"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"
import { Application } from "./Application"
import { Me } from "./Me"
import { Organization } from "./Organization"
import { User } from "./User"
import { Version } from "./Version"

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
	private entityTags: EntityTags = { application: {}, organization: {}, user: {} }
	readonly version = new Version(this.client)
	readonly user = new User(this.client, this.entityTags)
	readonly me = new Me(this.client)
	readonly organization = new Organization(this.client, this.entityTags)
	readonly application = new Application(this.client, this.entityTags)
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
export const client = Client.create(backend, token)
