import * as gracely from "gracely"
import * as isoly from "isoly"
import { userwidgets } from "@userwidgets/model"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"
import type { EntityTags } from "./index"

export class Application extends rest.Collection<gracely.Error> {
	constructor(client: http.Client, private readonly entityTags: EntityTags) {
		super(client)
	}
	async create(application: userwidgets.Application.Creatable): Promise<userwidgets.Application | gracely.Error> {
		const result = await this.client.post<userwidgets.Application>("/application", application)
		!gracely.Error.is(result) && (this.entityTags.application[result.id] = isoly.DateTime.now())
		return result
	}
	async fetch(): Promise<userwidgets.Application | gracely.Error> {
		const result = await this.client.get<userwidgets.Application>(`/application`)
		!gracely.Error.is(result) && (this.entityTags.application[result.id] = isoly.DateTime.now())
		return result
	}
}
