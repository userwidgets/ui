import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Applications } from "./Applications"
import { Me } from "./Me"

namespace Response {
	export const update = isly.object<{ organization: userwidgets.Organization }>({
		organization: userwidgets.Organization.type,
	})
	export const fetch = isly.array(userwidgets.Organization.type)
}

export class Organizations extends smoothly.StateBase<Organizations, userwidgets.ClientCollection> {
	private request?: Promise<Exclude<Organizations["value"], undefined>>
	#value?: Organizations["value"]
	get value(): userwidgets.Organization[] | false | undefined {
		return this.#value ?? (this.fetch(), undefined)
	}
	set value(value: Organizations["value"]) {
		this.#value = value
		if (!value) {
			if (value !== this.#current)
				this.listenable.current = value
		} else if (!this.#current) {
			const id = window.localStorage.getItem(this.storage.current)
			this.listenable.current =
				(!id ? undefined : value.find(organization => organization.id == id)) ?? value.at(0) ?? false
		} else {
			const id = this.#current.id
			const index = value.findIndex(organization => organization.id == id)
			const current = value.at(Math.max(index, 0))
			if (current !== this.#current)
				this.listenable.current = current
		}
	}
	#current?: Organizations["current"]
	get current(): userwidgets.Organization | false | undefined {
		return this.#current ?? (this.fetch(), undefined)
	}
	set current(current: Organizations["current"]) {
		this.#current = current
		if (!current) {
			window.localStorage.removeItem(this.storage.current)
			if (current !== this.#value)
				this.listenable.value = current
		} else if (this.#value && !this.#value.includes(current)) {
			window.localStorage.setItem(this.storage.current, current.id)
			const index = this.#value.findIndex(organization => organization.id == current.id)
			if (index !== -1)
				this.listenable.value = [...this.#value.slice(0, index), current, ...this.#value.slice(index + 1)]
			else
				this.listenable.value = [...this.#value, current]
		} else
			window.localStorage.setItem(this.storage.current, current.id)
	}
	private storage = { current: "userwidgetsOrganization" }
	private constructor(
		client: userwidgets.ClientCollection,
		private me: smoothly.WithListenable<Me>,
		private applications: smoothly.WithListenable<Applications>
	) {
		super(client)
	}

	async fetch(): Promise<userwidgets.Organization[] | false> {
		let result: userwidgets.Organization[] | false
		if (this.request)
			result = await this.request
		else {
			const request = !this.me.key
				? false
				: this.client.organization.list().then(result => (!Response.fetch.is(result) ? false : result))
			this.request = request || undefined
			result = await request
			this.request = undefined
			if (this.#value !== result)
				this.listenable.value = result
		}
		return result || false
	}

	async update(
		organization: userwidgets.Organization.Changeable,
		options?: { id?: userwidgets.Organization.Identifier; email?: true }
	): Promise<userwidgets.Organization | false> {
		const id = options?.id ?? (this.current || undefined)?.id
		const result =
			!this.me.key || !id
				? undefined
				: await this.client.organization
						.update(id, organization, options?.email && window.location.origin)
						.then(response => (Response.update.is(response) ? response.organization : false))
		if (result)
			this.fetch()
		return result || false
	}
	async create(organization: userwidgets.Organization.Creatable): Promise<userwidgets.Organization | false> {
		const result = !this.applications.current
			? undefined
			: await this.client.organization
					.create(organization, this.applications.current.id, window.location.origin)
					.then(result => (!userwidgets.Organization.is(result) ? false : result))
		if (result)
			this.fetch()
		return result || false
	}
	private subscriptions = {
		key: (key: Me["key"]) => {
			if (this.#value !== undefined)
				if (key !== undefined)
					(this.request = undefined), this.fetch()
				else if (key === undefined)
					this.listenable.value = undefined
		},
	}
	static create(
		client: userwidgets.ClientCollection,
		me: smoothly.WithListenable<Me>,
		applications: smoothly.WithListenable<Applications>
	): smoothly.WithListenable<Organizations> {
		const backend = new this(client, me, applications)
		const listenable = smoothly.Listenable.load(backend)
		me.listen("key", key => backend.subscriptions.key(key), { lazy: true })
		return listenable
	}
}
