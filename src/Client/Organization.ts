import * as gracely from "gracely"
import * as rest from "cloudly-rest"
import * as model from "../model"

export class Organization extends rest.Collection<gracely.Error> {
	async create(organization: model.Organization.Creatable): Promise<model.Organization | gracely.Error> {
		return await this.client.post<model.Organization | gracely.Error>("api/organization", organization)
	}
	async fetch(id: string): Promise<model.Organization | gracely.Error> {
		return await this.client.get<model.Organization | gracely.Error>(`api/organization/${id}`)
	}
	async changeName(
		id: string,
		organization: model.Organization.Creatable,
		entityTag = "*"
	): Promise<model.Organization | gracely.Error> {
		return await this.client.put<model.Organization | gracely.Error>(`api/organization/${id}/name`, organization, {
			ifMatch: [entityTag],
		})
	}
}
