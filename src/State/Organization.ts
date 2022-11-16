import { Client } from "../Client"
import { model } from "../model"
import { Listenable } from "./Listenable"
import { Options } from "./Options"

export class Organization {
	#options: Options = {}
	get options(): Options {
		return this.#options
	}
	set options(options: Options) {
		this.#options.applicationId != options.applicationId && ((this.options = { ...options }), this.fetch())
	}
	#organizations?: Promise<model.userwidgets.Organization[] | false>
	get organizations(): Promise<model.userwidgets.Organization[] | false> | undefined {
		return this.#organizations ?? this.fetch()
	}
	set organizations(organizations: Promise<model.userwidgets.Organization[] | false> | undefined) {
		this.#organizations = organizations
	}
	#client: Client
	#self: Organization & Listenable<Organization>
	private constructor(listenable: Organization & Listenable<Organization>, client: Client) {
		this.#self = listenable
		this.#client = client
	}
	fetch(): Promise<model.userwidgets.Organization[] | false> | undefined {
		return (this.#self.organizations = !this.#options.applicationId
			? undefined
			: this.#client.organization.list().then(response => (!isOrganizations(response) ? false : response)))
	}

	async removeUser(email: string): Promise<model.userwidgets.Organization | false | undefined> {
		return !this.#options.organizationId
			? undefined
			: this.#client.organization
					.removeUser(this.#options.organizationId, email)
					.then(response => (!model.userwidgets.Organization.is(response) ? false : response))
	}

	static create(client: Client): Organization & Listenable<Organization> {
		const self = new Listenable<Organization>() as Organization & Listenable<Organization>
		return Listenable.load(new this(self, client), self)
	}
}

const isOrganizations = model.createIsArrayOf((value): value is model.userwidgets.Organization =>
	model.userwidgets.Organization.is(value)
)
