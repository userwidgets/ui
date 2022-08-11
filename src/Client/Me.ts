import * as gracely from "gracely"
import * as model from "@userwidgets/model"
import * as rest from "cloudly-rest"

export class Me extends rest.Collection<gracely.Error> {
	async login(applicationId: string, credentials: model.User.Credentials): Promise<model.User.Key | gracely.Error> {
		let result: gracely.Error | model.User.Key
		if (credentials.password == undefined)
			result = gracely.client.malformedContent("password", "string", "Password is required for login.")
		else {
			const token = await this.client.get<string>("me", {
				authorization: model.User.Credentials.toBasic({ user: credentials.user, password: credentials.password }),
				application: applicationId,
			})
			result = gracely.Error.is(token)
				? token
				: (await model.User.Key.unpack(token)) ?? gracely.client.unauthorized("Failed to verify token.")
			if (!gracely.Error.is(result)) {
				this.client.key = result.token
				sessionStorage.setItem("token", result.token)
			}
		}
		return result
	}
}
