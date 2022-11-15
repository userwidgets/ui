import * as gracely from "gracely"
import * as rest from "cloudly-rest"
import { model } from "../model"

export class User extends rest.Collection<gracely.Error> {
	async list(): Promise<model.userwidgets.User.Readable[] | gracely.Error> {
		return await this.client.get<model.userwidgets.User.Readable[]>("user")
	}
	async changePassword(
		email: string,
		passwords: model.userwidgets.User.Password.Change
	): Promise<gracely.Result | gracely.Error> {
		const response = await this.client.put<"">(`user/${email}/password`, passwords)
		return response == "" ? gracely.success.noContent() : response
	}
	async changeName(email: string, name: model.userwidgets.User.Name): Promise<model.userwidgets.User | gracely.Error> {
		return await this.client.put<model.userwidgets.User>(`user/${email}/name`, name)
	}
	async updatePermissions(
		email: string,
		organizationId: string,
		permissions: model.userwidgets.User.Permissions.Readable
	) {
		return await this.client.patch<model.userwidgets.User.Readable>(
			`user/${email}/permission/${organizationId}`,
			permissions
		)
	}
}
