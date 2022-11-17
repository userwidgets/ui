import * as gracely from "gracely"
import * as isoly from "isoly"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"
import { model } from "../model"

export class Application extends rest.Collection<gracely.Error> {
	constructor(client: http.Client, private readonly entityTags: model.EntityTags) {
		super(client)
	}
	async create(
		application: model.userwidgets.Application.Creatable
	): Promise<model.userwidgets.Application | gracely.Error> {
		const result = await this.client.post<model.userwidgets.Application>("application", application)
		!gracely.Error.is(result) && (this.entityTags.application[result.id] = isoly.DateTime.now())
		return result
	}
	async fetch(): Promise<model.userwidgets.Application | gracely.Error> {
		const result = await this.client.get<model.userwidgets.Application>(`application`)
		!gracely.Error.is(result) && (this.entityTags.application[result.id] = isoly.DateTime.now())
		return result
	}
}
