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
	async register(
		tag: model.User.Tag,
		credentials: model.User.Credentials.Register
	): Promise<model.User.Key | gracely.Error> {
		const token = await this.client.post<string>(`me/${tag.token}`, credentials)
		const result = gracely.Error.is(token)
			? token
			: (await model.User.Key.unpack(token)) ?? gracely.client.unauthorized("Failed to verify token.")
		!gracely.Error.is(result) && (this.client.key = result.token) && sessionStorage.setItem("token", result.token)
		return result
	}
	async join(tag: model.User.Tag): Promise<model.User.Key | gracely.Result | gracely.Error> {
		const response = await this.client.patch<string>(`me/${tag.token}`, undefined)
		const result = gracely.Error.is(response)
			? response
			: response == ""
			? gracely.success.noContent()
			: (await model.User.Key.unpack(response)) ?? gracely.client.unauthorized("Failed to verify token.")
		!gracely.Error.is(result) &&
			!gracely.Result.is(result) &&
			(this.client.key = result.token) &&
			sessionStorage.setItem("token", result.token)
		return result
	}
}
