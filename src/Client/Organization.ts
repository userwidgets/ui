import * as gracely from "gracely"
import * as model from "@userwidgets/model"
import * as rest from "cloudly-rest"

export class Organization extends rest.Collection<gracely.Error> {
	async create(
		organization: model.Organization.Creatable,
		applicationId: string
	): Promise<model.Organization | gracely.Error> {
		return await this.client.post<model.Organization>("api/organization", organization, {
			application: applicationId,
		})
	}
	async fetch(id: string, applicationId: string): Promise<model.Organization | gracely.Error> {
		return await this.client.get<model.Organization>(`api/organization/${id}`, {
			application: applicationId,
		})
	}
	async changeName(
		id: string,
		organization: model.Organization.Creatable,
		applicationId: string,
		entityTag = "*"
	): Promise<model.Organization | gracely.Error> {
		return await this.client.put<model.Organization>(`api/organization/${id}/name`, organization, {
			ifMatch: [entityTag],
			application: applicationId,
		})
	}
}
