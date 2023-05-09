import * as gracely from "gracely"
import * as isoly from "isoly"
import { userwidgets } from "@userwidgets/model"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"
import type { EntityTags } from "./index"
export class User extends rest.Collection<gracely.Error> {
	constructor(client: http.Client, readonly entityTags: EntityTags, readonly prefix: `/${string}` | "" = "") {
		super(client)
	}
	async list(): Promise<userwidgets.User.Readable[] | gracely.Error> {
		const result = await this.client.get<userwidgets.User.Readable[]>(`${this.prefix}/user`)
		!gracely.Error.is(result) &&
			result.forEach(user => ((this.entityTags.user[user.email] = isoly.DateTime.now()), this.entityTags))
		return result
	}

	async changePassword(
		email: string,
		passwords: userwidgets.User.Password.Change
	): Promise<gracely.Result | gracely.Error> {
		const entityTag = this.entityTags?.user?.[email]
		const response = await this.client.put<"">(
			`${this.prefix}/user/${email}/password`,
			passwords,
			!entityTag ? undefined : { ifMatch: [entityTag] }
		)
		!gracely.Error.is(response) && (this.entityTags.user[email] = isoly.DateTime.now())
		return response == "" ? gracely.success.noContent() : response
	}
	async changeName(email: string, name: userwidgets.User.Name): Promise<userwidgets.User | gracely.Error> {
		const entityTag = this.entityTags.user[email]
		const result = await this.client.put<userwidgets.User>(
			`${this.prefix}/user/${email}/name`,
			name,
			!entityTag ? undefined : { ifMatch: [entityTag] }
		)
		!gracely.Error.is(result) && (this.entityTags.user[email] = isoly.DateTime.now())
		return result
	}
	async updatePermissions(
		email: string,
		organizationId: string,
		permissions: userwidgets.User.Permissions.Readable
	): Promise<userwidgets.User.Readable | gracely.Error> {
		const entityTag = this.entityTags.user[email]
		const result = await this.client.patch<userwidgets.User.Readable>(
			`${this.prefix}/user/${email}/permission/${organizationId}`,
			permissions,
			!entityTag ? undefined : { ifMatch: [entityTag] }
		)
		!gracely.Error.is(result) &&
			((this.entityTags.user[email] = isoly.DateTime.now()),
			(this.entityTags.organization[organizationId] = isoly.DateTime.now()))
		return result
	}
}
