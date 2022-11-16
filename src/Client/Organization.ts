import * as gracely from "gracely"
import * as isoly from "isoly"
import * as model from "@userwidgets/model"
import * as rest from "cloudly-rest"

export class Organization extends rest.Collection<gracely.Error> {
	entityTags: Record<string, isoly.DateTime | undefined> = {}
	async create(
		organization: model.Organization.Creatable,
		applicationId: string
	): Promise<model.Organization | gracely.Error> {
		const result = await this.client.post<model.Organization>("organization", organization, {
			application: applicationId,
		})
		!gracely.Error.is(result) && (this.entityTags[result.id] = isoly.DateTime.now())
		return result
	}
	async fetch(organizationId: string, applicationId: string): Promise<model.Organization | gracely.Error> {
		const result = await this.client.get<model.Organization>(`organization/${organizationId}`, {
			application: applicationId,
		})
		!gracely.Error.is(result) && (this.entityTags[result.id] = isoly.DateTime.now())
		return result
	}
	async list(): Promise<model.Organization[] | gracely.Error> {
		const result = await this.client.get<model.Organization[]>(`organization`)
		!gracely.Error.is(result) &&
			result.reduce(
				(entityTags, organization) => ((entityTags[organization.id] = isoly.DateTime.now()), entityTags),
				this.entityTags
			)
		return result
	}
	async changeName(
		organizationId: string,
		organization: model.Organization.Creatable,
		applicationId: string
	): Promise<model.Organization | gracely.Error> {
		const entityTag = this.entityTags[organizationId]
		const result = await this.client.put<model.Organization>(`organization/${organizationId}/name`, organization, {
			...(entityTag && { ifMatch: [entityTag] }),
			application: applicationId,
		})
		!gracely.Error.is(result) && (this.entityTags[result.id] = isoly.DateTime.now())
		return result
	}
	async removeUser(organizationId: string, email: string) {
		const entityTag = this.entityTags[organizationId]
		const result = await this.client.delete<model.Organization>(`organization/${organizationId}/user/${email}`, {
			...(entityTag && { ifMatch: [entityTag] }),
		})
		!gracely.Error.is(result) &&
			(this.entityTags = (({ [organizationId]: _, ...entityTags }) => entityTags)(this.entityTags))
		return result
	}
}
