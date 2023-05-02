import { Listenable, WithListenable } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../model"
import { Base } from "./Base"
import { Me } from "./Me"
import { Organizations } from "./Organizations"

export class Users extends Base<Users, model.Client> {
	private request?: Promise<Users["value"]>
	private set key(key: Me["key"]) {
		if (this.#value != undefined)
			if (key != undefined)
				(this.request = undefined), this.fetch()
			else if (key == undefined)
				this.listenable.value = undefined
	}
	private set organization(organization: Organizations["current"]) {
		if (this.#value != undefined)
			if (organization != undefined)
				(this.request = undefined), this.fetch()
			else if (organization == undefined)
				this.listenable.value = undefined
	}
	#value?: Users["value"]
	get value(): userwidgets.User.Readable[] | false | undefined {
		return this.#value ?? (this.fetch(), this.#value)
	}
	set value(value: Users["value"]) {
		this.#value = value
	}
	private constructor(
		client: model.Client,
		private me: WithListenable<Me>,
		private organizations: WithListenable<Organizations>
	) {
		super(client)
	}
	async fetch(): Promise<userwidgets.User.Readable[] | false> {
		const promise = !this.me.key
			? undefined
			: this.client.user.list().then(response => (!isUsers(response) ? false : response))
		const result = await promise
		if (promise == this.request)
			this.request = undefined
		return (this.listenable.value = result) || false
	}
	async updatePermissions(
		email: string,
		permissions: userwidgets.User.Permissions.Readable
	): Promise<userwidgets.User.Readable | false> {
		const promise = !this.organizations.current
			? undefined
			: this.client.user
					.updatePermissions(email, this.organizations.current.id, permissions)
					.then(response => (!userwidgets.User.Readable.is(response) ? false : response))
		const result = await promise
		if (result)
			this.fetch()
		return result || false
	}
	static create(
		client: model.Client,
		me: WithListenable<Me>,
		organizations: WithListenable<Organizations>
	): WithListenable<Users> {
		const backend = new this(client, me, organizations)
		const listenable = Listenable.load(backend)
		me.listen("key", key => (backend.key = key))
		organizations.listen("current", organization => (backend.organization = organization))
		return listenable
	}
}

const isUsers = model.createIsArrayOf((value): value is userwidgets.User.Readable =>
	userwidgets.User.Readable.is(value)
)
