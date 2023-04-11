import { Listenable, WithListenable } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../model"
import { Base } from "./Base"

export class Organizations extends Base<Organizations, model.Client> {
	#request?: Promise<Organizations["value"]>
	#value?: Organizations["value"]
	get value(): userwidgets.Organization[] | false | undefined {
		return this.#value ?? (this.fetch(), undefined)
	}
	set value(value: Organizations["value"]) {
		this.#value = value
		if (!value)
			this.current = value
		else if (!this.current)
			this.current = value && value.at(0)
		else {
			const id = this.current.id
			const index = value.findIndex(organization => organization.id == id)
			const current = value.at(Math.max(index, 0))
			if (current != this.current)
				this.listenable.current = current
		}
	}
	#current?: Organizations["current"]
	get current(): userwidgets.Organization | false | undefined {
		return this.#current ?? (this.fetch(), undefined)
	}
	set current(current: Organizations["current"]) {
		this.#current = current
		if (this.value && current && !this.value.includes(current)) {
			const id = current.id
			const index = this.value.findIndex(organization => organization.id == id)
			if (index != -1)
				this.listenable.value = [...this.value.slice(0, index), current, ...this.value.slice(index + 1)]
		}
	}
	async fetch(): Promise<userwidgets.Organization[] | false> {
		const promise = (this.#request ??= this.client.organization
			.list()
			.then(response => (!isOrganizations(response) ? false : response)))
		const result = await promise
		if (promise == this.#request)
			this.#request = undefined
		return (this.listenable.value = result || false)
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
	static create(client: model.Client): WithListenable<Organizations> {
		const backend = new this(client)
		const listenable = Listenable.load(backend)
		return listenable
	}
}

const isOrganizations = model.createIsArrayOf((value): value is userwidgets.Organization =>
	userwidgets.Organization.is(value)
)
