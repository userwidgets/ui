import * as gracely from "gracely"
import * as isoly from "isoly"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"
import { model } from "../model"

export class User extends rest.Collection<gracely.Error> {
	constructor(client: http.Client, private readonly entityTags: model.EntityTags) {
		super(client)
	}
	async list(): Promise<model.userwidgets.User.Readable[] | gracely.Error> {
		const result = await this.client.get<model.userwidgets.User.Readable[]>("user")
		!gracely.Error.is(result) &&
			result.forEach(user => ((this.entityTags.user[user.email] = isoly.DateTime.now()), this.entityTags))
		return result
	}
	async changePassword(
		email: string,
		passwords: model.userwidgets.User.Password.Change
	): Promise<gracely.Result | gracely.Error> {
		const entityTag = this.entityTags?.user?.[email]
		const response = await this.client.put<"">(
			`user/${email}/password`,
			passwords,
			!entityTag ? undefined : { ifMatch: [entityTag] }
		)
		!gracely.Error.is(response) && (this.entityTags.user[email] = isoly.DateTime.now())
		return response == "" ? gracely.success.noContent() : response
	}
	async changeName(email: string, name: model.userwidgets.User.Name): Promise<model.userwidgets.User | gracely.Error> {
		const entityTag = this.entityTags.user[email]
		const result = await this.client.put<model.userwidgets.User>(
			`user/${email}/name`,
			name,
			!entityTag ? undefined : { ifMatch: [entityTag] }
		)
		!gracely.Error.is(result) && (this.entityTags.user[email] = isoly.DateTime.now())
		return result
	}
	async updatePermissions(
		email: string,
		organizationId: string,
		permissions: model.userwidgets.User.Permissions.Readable
	): Promise<model.userwidgets.User.Readable | gracely.Error> {
		const entityTag = this.entityTags.user[email]
		const result = await this.client.patch<model.userwidgets.User.Readable>(
			`user/${email}/permission/${organizationId}`,
			permissions,
			!entityTag ? undefined : { ifMatch: [entityTag] }
		)
		!gracely.Error.is(result) &&
			((this.entityTags.user[email] = isoly.DateTime.now()),
			(this.entityTags.organization[organizationId] = isoly.DateTime.now()))
		return result
	}
}
