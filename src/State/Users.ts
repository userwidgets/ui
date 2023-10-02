import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { Me } from "./Me"
import { Organizations } from "./Organizations"

export class Users extends smoothly.StateBase<Users, userwidgets.ClientCollection> {
	private request?: Promise<Users["value"]>
	private set key(key: Me["key"]) {
		if (this.value != undefined)
			if (key != undefined)
				(this.request = undefined), this.fetch()
			else if (key == undefined)
				this.listenable.value = undefined
	}
	private set organization(organization: Organizations["current"]) {
		if (this.value != undefined)
			if (organization != undefined)
				(this.request = undefined), this.fetch()
			else if (organization == undefined)
				this.listenable.value = undefined
	}
	#value?: Users["value"]
	get value(): userwidgets.User[] | false | undefined {
		return this.#value ?? (this.fetch(), this.#value)
	}
	set value(value: Users["value"]) {
		this.#value = value
	}
	private constructor(
		client: userwidgets.ClientCollection,
		private me: smoothly.WithListenable<Me>,
		private organizations: smoothly.WithListenable<Organizations>
	) {
		super(client)
	}
	async fetch(): Promise<userwidgets.User[] | false> {
		const promise = !this.me.key
			? undefined
			: (this.request ??= this.client.user
					.list()
					.then(response => (!userwidgets.User.type.array().is(response) ? false : response)))
		const result = await promise
		if (promise == this.request)
			this.request = undefined
		return (this.listenable.value = result) || false
	}
	async updatePermissions(
		email: string,
		permissions: userwidgets.User.Permissions.Readable
	): Promise<userwidgets.User | false> {
		const promise = !this.organizations.current
			? undefined
			: this.client.user
					.updatePermissions(email, this.organizations.current.id, permissions)
					.then(response => (!userwidgets.User.is(response) ? false : response))
		const result = await promise
		if (result)
			this.fetch()
		return result || false
	}
	static create(
		client: userwidgets.ClientCollection,
		me: smoothly.WithListenable<Me>,
		organizations: smoothly.WithListenable<Organizations>
	): smoothly.WithListenable<Users> {
		const backend = new this(client, me, organizations)
		const listenable = smoothly.Listenable.load(backend)
		me.listen("key", key => (backend.key = key))
		organizations.listen("current", organization => (backend.organization = organization))
		return listenable
	}
}
