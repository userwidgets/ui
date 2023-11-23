import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Me } from "./Me"

namespace Response {
	export const update = isly.object<{ organization: userwidgets.Organization }>({
		organization: userwidgets.Organization.type,
	})
	export const fetch = isly.array(userwidgets.Organization.type)
}

export class Organizations extends smoothly.StateBase<Organizations, userwidgets.ClientCollection> {
	private request?: Promise<Organizations["value"]>
	private set key(key: Me["key"]) {
		if (this.value != undefined)
			if (key != undefined)
				(this.request = undefined), this.fetch()
			else if (key == undefined)
				this.listenable.value = undefined
	}
	#value?: Organizations["value"]
	get value(): userwidgets.Organization[] | false | undefined {
		return this.#value ?? (this.fetch(), undefined)
	}
	set value(value: Organizations["value"]) {
		this.#value = value
		if (!value) {
			if (value != this.#current)
				this.listenable.current = value
		} else if (!this.#current) {
			if (value && value.length)
				this.listenable.current = value.at(0)
		} else {
			const id = this.#current.id
			const index = value.findIndex(organization => organization.id == id)
			const current = value.at(Math.max(index, 0))
			if (current != this.#current)
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
			if (current != this.#value)
				this.listenable.value = current
		} else if (this.#value && !this.#value.includes(current)) {
			const id = current.id
			const index = this.#value.findIndex(organization => organization.id == id)
			if (index != -1)
				this.listenable.value = [...this.#value.slice(0, index), current, ...this.#value.slice(index + 1)]
			else
				this.listenable.value = [...this.#value, current]
		}
	}
	private constructor(client: userwidgets.ClientCollection, private me: smoothly.WithListenable<Me>) {
		super(client)
	}

	async fetch(): Promise<userwidgets.Organization[] | false> {
		const promise = !this.me.key
			? undefined
			: (this.request ??= this.client.organization
					.list()
					.then(response => (Response.fetch.is(response) ? response : false)))
		const result = await promise
		this.request = undefined
		if (this.#value != result)
			this.listenable.value = result
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
	static create(
		client: userwidgets.ClientCollection,
		me: smoothly.WithListenable<Me>
	): smoothly.WithListenable<Organizations> {
		const backend = new this(client, me)
		const listenable = smoothly.Listenable.load(backend)
		me.listen("key", key => (backend.key = key))
		return listenable
	}
}
