import * as gracely from "gracely"
import * as isoly from "isoly"
import * as model from "@userwidgets/model"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"
import { Application } from "./Application"
import { Me } from "./Me"
import { Organization } from "./Organization"
import { Seed } from "./Seed"
import { User } from "./User"
import { Version } from "./Version"

class HttpClient<Error> extends http.Client<Error> {
	private entityTag: isoly.DateTime
	protected async preProcess(request: http.Request): Promise<http.Request> {
		return ["PUT", "PATCH"].includes(request.method)
			? { ...request, header: { ...request.header, ifMatch: [this.entityTag] } }
			: request
	}
	protected async postProcess(response: http.Response): Promise<http.Response> {
		this.entityTag = isoly.DateTime.now()
		return response
	}
}

export class Client extends rest.Client<gracely.Error> {
	readonly version = new Version(this.client)
	readonly user = new User(this.client)
	readonly me = new Me(this.client)
	readonly organization = new Organization(this.client)
	readonly application = new Application(this.client)
	readonly seed = new Seed(this.client)
	static create<T = Record<string, any>, Error = never>(
		url?: string,
		key?: string,
		load?: (connection: http.Client) => T
	): Client & T {
		const client = new HttpClient<Error>(url, key)
		const result = new this(client)
		if (load)
			Object.assign(result, load(client))
		return result as Client & T
	}
	get fullKey(): Promise<model.User.Key | undefined> {
		return new Promise<model.User.Key | undefined>(resolve =>
			this.key ? resolve(model.User.Key.unpack(this.key)) : resolve(undefined)
		)
	}
	onUnauthorized?: (client: rest.Client<never>) => Promise<boolean>
}

export { Application, Organization, Me, Seed, User, Version }
