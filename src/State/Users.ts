import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { Me } from "./Me"
import { Organizations } from "./Organizations"

export class Users extends smoothly.StateBase<Users, userwidgets.ClientCollection> {
	private request?: Promise<Exclude<Users["value"], undefined>>
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
	get value(): userwidgets.User[] | false | undefined {
		return this.#value ?? (this.fetch(), this.#value)
	}
	set value(value: Users["value"]) {
		this.#value = value
		if (this.#value && this.state.organizations.current) {
			const organization = this.state.organizations.current
			const users = this.#value
			this.listenable.invited = organization.users
				.filter(email => !users.some(user => user.email == email))
				.map(email => ({ email }))
		} else
			this.listenable.invited = this.#value && this.state.organizations.current && undefined
	}
	#invited?: Users["invited"]
	get invited(): Pick<userwidgets.User, "email">[] | false | undefined {
		return this.#invited ?? (this.fetch(), undefined)
	}
	set invited(invited: Users["invited"]) {
		this.#invited = invited
	}
	private constructor(
		client: userwidgets.ClientCollection,
		private state: {
			me: smoothly.WithListenable<Me>
			organizations: smoothly.WithListenable<Organizations>
		}
	) {
		super(client)
	}
	async fetch(): Promise<userwidgets.User[] | false> {
		let result: userwidgets.User[] | false
		if (this.request)
			result = await this.request
		else {
			const request = !this.state.me.key
				? false
				: this.client.user.list().then(result => (!userwidgets.User.type.array().is(result) ? false : result))
			this.request = request || undefined
			result = await request
			this.request = undefined
			if (this.#value != result)
				this.listenable.value = result
		}
		return result || false
	}
	async update(
		email: userwidgets.Email,
		user: userwidgets.User.Changeable,
		options?: { entityTag?: string }
	): Promise<userwidgets.User | false> {
		let result: userwidgets.User | false
		const update = !this.state.me.key ? false : await this.client.user.update(email, user, options)
		if (!userwidgets.User.is(update)) {
			console.error("Userwidgets update: ", update)
			result = false
		} else {
			this.fetch()
			result = update
		}
		return result
	}
	static create(
		client: userwidgets.ClientCollection,
		me: smoothly.WithListenable<Me>,
		organizations: smoothly.WithListenable<Organizations>
	): smoothly.WithListenable<Users> {
		const backend = new this(client, { me, organizations })
		const listenable = smoothly.Listenable.load(backend)
		me.listen("key", key => (backend.key = key), { lazy: true })
		organizations.listen("current", organization => (backend.organization = organization), { lazy: true })
		return listenable
	}
}
