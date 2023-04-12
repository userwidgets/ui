import { Listenable, WithListenable } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../model"
import { Base } from "./Base"
import { Me } from "./Me"
import { Organizations } from "./Organizations"

export class Users extends Base<Users, model.Client> {
	#request?: Promise<Users["value"]>
	// #key?: Users["key"]
	// private get key(): Me["key"] {
	// 	return this.#key
	// }
	private set key(key: Me["key"]) {
		// this.#key = key
		if (key != undefined && this.value != undefined)
			this.fetch()
		else if (key == undefined)
			this.listenable.value = undefined
	}
	// #organization: Users["organization"]
	// private get organization(): Organizations["current"] {
	// 	return this.#organization
	// }
	private set organization(organization: Organizations["current"]) {
		if (organization != undefined && this.value != undefined)
			this.fetch()
		else if (organization == undefined)
			this.listenable.value = undefined
		// this.#organization = organization
		// if (organization != undefined && this.value != undefined)
		// 	this.fetch()
		// else if (organization == undefined)
		// 	this.value = undefined
	}
	#value?: Users["value"]
	get value(): userwidgets.User.Readable[] | false | undefined {
		return this.#value ?? (this.fetch(), this.#value)
	}
	set value(value: Users["value"]) {
		this.#value = value
	}
	async fetch(): Promise<userwidgets.User.Readable[] | false> {
		const promise = !this.key
			? false
			: this.client.user.list().then(response => (!isUsers(response) ? false : response))
		const result = await promise
		if (promise == this.#request)
			this.#request = undefined
		return (this.listenable.value = result) || false
	}
	async updatePermissions(
		email: string,
		permissions: userwidgets.User.Permissions.Readable
	): Promise<userwidgets.User.Readable | false> {
		const promise = !this.organization
			? false
			: this.client.user
					.updatePermissions(email, this.organization.id, permissions)
					.then(response => (!userwidgets.User.Readable.is(response) ? false : response))
		const result = await promise
		if (result)
			this.fetch()
		return result
	}
	static create(
		client: model.Client,
		me: WithListenable<Me>,
		organizations: WithListenable<Organizations>
	): WithListenable<Users> {
		const backend = new this(client)
		const listenable = Listenable.load(backend)
		me.listen("key", key => (backend.key = key))
		organizations.listen("current", organization => (backend.organization = organization))
		return listenable
	}
}

const isUsers = model.createIsArrayOf((value): value is userwidgets.User.Readable =>
	userwidgets.User.Readable.is(value)
)
