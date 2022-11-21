import { Client } from "../Client"
import { client } from "../client"
import { Application } from "./Application"
import { Listenable } from "./Listenable"
import { Me } from "./Me"
import { Options } from "./Options"
import { Organization } from "./Organization"
import { User } from "./User"

export class State {
	#options: Options = {}
	get options() {
		return this.#options
	}
	set options(options: Options) {
		options = { ...this.#self.options, ...options }
		this.user.options = options
		this.me.options = options
		this.organization.options = options
		this.application.options = options
		this.#options = options
	}
	private optionHandler(options: Options) {
		options = { ...this.#options, ...options }
		this.application.options = options
		this.organization.options = options
		this.user.options = options
		this.#options = options
	}
	set onUnauthorized(value: () => Promise<boolean>) {
		this.client.onUnauthorized = value
		this.me.loginTrigger = value
	}
	readonly me: Listenable<Me> & Me
	readonly user: Listenable<User> & User
	readonly application: Listenable<Application> & Application
	readonly organization: Listenable<Organization> & Organization
	#self: State & Listenable<State>
	private constructor(listenable: State & Listenable<State>, private client: Client) {
		this.me = Me.create(client)
		this.user = User.create(client)
		this.organization = Organization.create(client, this.user)
		this.application = Application.create(client)
		this.#self = listenable
	}
	static create(client: Client): State & Listenable<State> {
		const self = new Listenable() as State & Listenable<State>
		Listenable.load(new this(self, client), self)
		self.me.listen("options", options => self.optionHandler(options))
		return self
	}
}

export const state = State.create(client)

const appUrl = new URL(window.location.href)
let applicationId: string | undefined
try {
	applicationId = appUrl.searchParams.get("applicationId") ?? process.env.applicationId ?? undefined
} catch (e) {
	applicationId = undefined
}
state.options = { applicationId: applicationId }
export { Me, User, Organization, Application }
