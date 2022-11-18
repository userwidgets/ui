import * as gracely from "gracely"
import * as isoly from "isoly"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"
import { model } from "../model"

export class Organization extends rest.Collection<gracely.Error> {
	constructor(client: http.Client, private readonly entityTags: model.EntityTags) {
		super(client)
	}
	async create(
		organization: model.userwidgets.Organization.Creatable,
		applicationId: string
	): Promise<model.userwidgets.Organization | gracely.Error> {
		const result = await this.client.post<model.userwidgets.Organization>("organization", organization, {
			application: applicationId,
		})
		!gracely.Error.is(result) && (this.entityTags.organization[result.id] = isoly.DateTime.now())
		return result
	}
	async fetch(organizationId: string, applicationId: string): Promise<model.userwidgets.Organization | gracely.Error> {
		const result = await this.client.get<model.userwidgets.Organization>(`organization/${organizationId}`, {
			application: applicationId,
		})
		!gracely.Error.is(result) && (this.entityTags.organization[result.id] = isoly.DateTime.now())
		return result
	}
	async list(): Promise<model.userwidgets.Organization[] | gracely.Error> {
		const result = await this.client.get<model.userwidgets.Organization[]>(`organization`)
		!gracely.Error.is(result) &&
			result.reduce(
				(entityTags, organization) => ((entityTags.organization[organization.id] = isoly.DateTime.now()), entityTags),
				this.entityTags
			)
		return result
	}
	async changeName(
		organizationId: string,
		organization: model.userwidgets.Organization.Creatable,
		applicationId: string
	): Promise<model.userwidgets.Organization | gracely.Error> {
		const entityTag = this.entityTags.organization[organizationId]
		const result = await this.client.put<model.userwidgets.Organization>(
			`organization/${organizationId}/name`,
			organization,
			{
				...(entityTag && { ifMatch: [entityTag] }),
				application: applicationId,
			}
		)
		!gracely.Error.is(result) && (this.entityTags.organization[result.id] = isoly.DateTime.now())
		return result
	}
	async removeUser(organizationId: string, email: string) {
		const entityTag = this.entityTags.organization[organizationId]
		const result = await this.client.delete<model.userwidgets.Organization>(
			`organization/${organizationId}/user/${email}`,
			{
				...(entityTag && { ifMatch: [entityTag] }),
			}
		)
		!gracely.Error.is(result) && (this.entityTags.organization[organizationId] = isoly.DateTime.now())
		return result
	}
}
