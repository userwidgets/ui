import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../model"
import { Me } from "./Me"

export class Organizations extends smoothly.StateBase<Organizations, userwidgets.ClientCollection> {
	private request?: Promise<Organizations["value"]>
	private set key(key: Me["key"]) {
		if (this.#value != undefined)
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
		} else if (!this.#current)
			this.listenable.current = value && value.at(0)
		else {
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
					.then(response => (!isOrganizations(response) ? false : response)))
		const result = await promise
		if (promise == this.request)
			this.request = undefined
		return (this.listenable.value = result) || false
	}
	async removeUser(email: string): Promise<userwidgets.Organization | false> {
		const result = !this.current
			? false
			: await this.client.organization
					.removeUser(this.current.id, email)
					.then(response => (!userwidgets.Organization.is(response) ? false : response))
		if (result)
			this.listenable.current = result
		return result
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

const isOrganizations = model.createIsArrayOf((value): value is userwidgets.Organization =>
	userwidgets.Organization.is(value)
)
