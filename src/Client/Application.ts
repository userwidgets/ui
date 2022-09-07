import * as gracely from "gracely"
import * as model from "@userwidgets/model"
import * as rest from "cloudly-rest"

export class Application extends rest.Collection<gracely.Error> {
	async create(application: model.Application.Creatable): Promise<model.Application | gracely.Error> {
		return await this.client.post<model.Application>("application", application)
	}
	async fetch(): Promise<model.Application | gracely.Error> {
		return await this.client.get<model.Application>(`application`)
	}
}
