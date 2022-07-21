import * as gracely from "gracely"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"
import * as model from "../model"
import { User } from "./User"
import { Version } from "./Version"

export class Client extends rest.Client<gracely.Error> {
	readonly version = new Version(this.client)
	readonly user = new User(this.client)
	readonly me = new Me(this.client)
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
	get fullKey(): Promise<model.User.Key | undefined> {
		return new Promise<model.User.Key | undefined>(resolve =>
			this.key ? resolve(model.User.Key.unpack(this.key)) : resolve(undefined)
		)
	}
	onUnauthorized?: (client: rest.Client<never>) => Promise<boolean>
}
