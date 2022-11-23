import { Client } from "../Client"
import { model } from "../model"
import { Listenable } from "./Listenable"
import { Options } from "./Options"
import { User } from "./User"

export class Organization {
	#options: Options = {}
	get options(): Options {
		return this.#options
	}
	set options(options: Options) {
		options = { ...this.#options, ...options }

		if (this.#organizations)
			if (
				(this.#options.applicationId != undefined && options.applicationId == undefined) ||
				(this.#options.key != undefined && options.key == undefined)
			)
				this.#self.organizations = undefined
			else if (options.applicationId == undefined || options.key == undefined)
				this.#self.organizations = Promise.resolve(false)
			else if (this.#options.key != options.key)
				(this.#options = options), this.fetch()

		this.#options = options
	}
	#organizations?: Promise<model.userwidgets.Organization[] | false>
	get organizations(): Promise<model.userwidgets.Organization[] | false> | undefined {
		return this.#organizations ?? this.fetch()
	}
	set organizations(organizations: Promise<model.userwidgets.Organization[] | false> | undefined) {
		this.#organizations = organizations
	}
	#self: Organization & Listenable<Organization>
	private constructor(
		listenable: Organization & Listenable<Organization>,
		private client: Client,
		private user: User & Listenable<User>
	) {
		this.#self = listenable
	}
	fetch(): Promise<model.userwidgets.Organization[] | false> | undefined {
		return (this.#self.organizations = this.client.organization
			.list()
			.then(response => (!isOrganizations(response) ? false : response)))
	}
	async removeUser(email: string): Promise<model.userwidgets.Organization | false> {
		const result = !this.#options.organizationId
			? false
			: this.client.organization
					.removeUser(this.#options.organizationId, email)
					.then(response => (!model.userwidgets.Organization.is(response) ? false : response))
		const response = await result
		response && this.user.fetch()
		return result
	}
	static create(client: Client, user: User & Listenable<User>): Organization & Listenable<Organization> {
		const self = new Listenable<Organization>() as Organization & Listenable<Organization>
		return Listenable.load(new this(self, client, user), self)
	}
}

const isOrganizations = model.createIsArrayOf((value): value is model.userwidgets.Organization =>
	model.userwidgets.Organization.is(value)
)
