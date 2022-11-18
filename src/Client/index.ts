import * as gracely from "gracely"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"
import { model } from "../model"
import { Application } from "./Application"
import { Me } from "./Me"
import { Organization } from "./Organization"
import { Seed } from "./Seed"
import { User } from "./User"
import { Version } from "./Version"

export class Client extends rest.Client<gracely.Error> {
	private entityTags: model.EntityTags = { application: {}, organization: {}, user: {} }
	readonly version = new Version(this.client)
	readonly user = new User(this.client, this.entityTags)
	readonly me = new Me(this.client)
	readonly organization = new Organization(this.client, this.entityTags)
	readonly application = new Application(this.client, this.entityTags)
	readonly seed = new Seed(this.client)
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

export { Application, Organization, Me, Seed, User, Version }
