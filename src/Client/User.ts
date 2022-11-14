import * as gracely from "gracely"
import * as model from "@userwidgets/model"
import * as rest from "cloudly-rest"

export class User extends rest.Collection<gracely.Error> {
	async list(): Promise<model.User.Readable[] | gracely.Error> {
		return await this.client.get<model.User.Readable[]>("user")
	}
	async changePassword(email: string, passwords: model.User.Password.Change): Promise<gracely.Result | gracely.Error> {
		const response = await this.client.put<"">(`user/${email}/password`, passwords)
		return response == "" ? gracely.success.noContent() : response
	}
	async changeName(email: string, name: model.User.Name, entityTag: string): Promise<model.User | gracely.Error> {
		return await this.client.put<model.User>(`user/${email}/name`, name, { ifMatch: [entityTag] })
	}
}
