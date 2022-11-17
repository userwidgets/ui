import { Client } from "../Client"
import { client } from "../client"
import { Application } from "./Application"
import { Listenable } from "./Listenable"
import { Me } from "./Me"
import { Options } from "./Options"
import { Organization } from "./Organization"
import { User } from "./User"
import { Version } from "./Version"

export class State {
	#options: Options = {}
	get options() {
		return this.#options
	}
	set options(options: Options) {
		options = { ...this.#self.options, ...options }
		this.#options = { ...this.#options, ...options }
		this.user.options = this.options
		this.me.options = this.options
		this.application.options = this.options
	}
	set onUnauthorized(value: () => Promise<boolean>) {
		this.#client.onUnauthorized = value
	}
	readonly me: Listenable<Me> & Me
	readonly user: Listenable<User> & User
	readonly application: Listenable<Application> & Application
	readonly organization: Listenable<Organization> & Organization
	readonly version: Version
	#self: State & Listenable<State>
	#client: Client
	private constructor(listenable: State & Listenable<State>, client: Client) {
		this.me = Me.create(client)
		this.user = User.create(client)
		this.organization = Organization.create(client, this.user)
		this.application = Application.create(client, this.me)
		this.version = new Version(client)
		this.#self = listenable
		this.#client = client
	}
	static create(client: Client): State & Listenable<State> {
		const self = new Listenable() as State & Listenable<State>
		Listenable.load(new this(self, client), self)
		self.me.listen(
			"options",
			options =>
				Object.assign(self.options, options) &&
				(self.application.options = options) &&
				(self.organization.options = options) &&
				(self.user.options = options)
		)
		return self
	}
}

export const state = State.create(client)

const appUrl = new URL(window.location.href)
let applicationId: string | undefined
try {
	applicationId = appUrl.searchParams.get("applicationId") ?? process.env.applicationId ?? window.origin
} catch (e) {
	applicationId = undefined
}
state.options = { applicationId: applicationId }

export { Me, User, Organization, Application, Version }
