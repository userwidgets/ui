import * as gracely from "gracely"
import * as rest from "cloudly-rest"
import * as model from "../model"

export class Application extends rest.Collection<gracely.Error> {
	async create(organization: model.Application.Creatable): Promise<model.Application | gracely.Error> {
		return await this.client.post<model.Application | gracely.Error>("api/application", organization)
	}
	async fetch(id: string): Promise<model.Application | gracely.Error> {
		return await this.client.get<model.Application | gracely.Error>(`api/application/${id}`)
	}
	// async changeName(
	// 	id: string,
	// 	application: model.Application.Creatable,
	// 	entityTag = "*"
	// ): Promise<model.Organization | gracely.Error> {
	// 	return await this.client.put<model.Application | gracely.Error>(`api/application/${id}/name`, application, {
	// 		ifMatch: [entityTag],
	// 	})
	// }
}
