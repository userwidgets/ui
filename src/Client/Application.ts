import * as gracely from "gracely"
import * as model from "@userwidgets/model"
import * as rest from "cloudly-rest"

export class Application extends rest.Collection<gracely.Error> {
	async create(application: model.Application.Creatable): Promise<model.Application | gracely.Error> {
		return await this.client.post<model.Application>("api/application", application)
	}
	async fetch(id: string): Promise<model.Application | gracely.Error> {
		return await this.client.get<model.Application>(`api/application/${id}`)
	}
	async changeName(
		id: string,
		application: model.Application,
		entityTag = "*"
	): Promise<model.Application | gracely.Error> {
		return await this.client.put<model.Application>(`api/application/${id}/name`, application, {
			ifMatch: [entityTag],
		})
	}
}
