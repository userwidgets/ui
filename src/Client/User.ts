import * as gracely from "gracely"
import * as rest from "cloudly-rest"
import * as model from "../model"

export class User extends rest.Collection<gracely.Error> {
	async list(): Promise<model.User[] | gracely.Error> {
		return await this.client.get<model.User[]>("api/user")
	}
	async create(user: model.User.Credentials): Promise<model.User | gracely.Error> {
		return await this.client.post<model.User | gracely.Error>("api/user", user)
	}
	async changePassword(email: string, passwords: model.User.PasswordChange): Promise<gracely.Result | gracely.Error> {
		const response = await this.client.put<"" | gracely.Error>(`api/user/${email}/password`, passwords)
		return response == "" ? gracely.success.noContent() : response
	}
	async changeName(email: string, name: model.User.Name): Promise<model.User | gracely.Error> {
		return await this.client.put<model.User>(`api/user/${email}/name`, name)
	}
}
