import { Listenable, WithListenable } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { Client } from "../Client"
import { model } from "../model"
import { Base } from "./Base"
import { Options } from "./Options"
import { Users } from "./Users"

export class Organizations extends Base<Organizations, Client> {
	#options: Organizations["options"] = {}
	private get options(): Options["value"] {
		return this.#options
	}
	private set options(options: Organizations["options"]) {
		options = { ...this.#options, ...options }
		if (this.#value)
			if (this.#options?.key != undefined && options.key == undefined)
				this.listenable.value = undefined
			else if (this.#options?.key == undefined && options.key == undefined)
				this.listenable.value = Promise.resolve(false)
			else if (this.#options?.key != options.key)
				this.fetch((this.#options = options))
		this.#options = options
	}
	#value?: Organizations["value"]
	get value(): Promise<userwidgets.Organization[] | false> | undefined {
		return this.#value ?? this.fetch()
	}
	set value(value: Organizations["value"]) {
		this.#value = value
		this.current = value?.then(response => response && response.at(0))
	}
	#current?: Organizations["current"]
	get current(): Promise<userwidgets.Organization | false | undefined> | undefined {
		return this.#current
	}
	set current(current: Organizations["current"]) {
		this.#current = current
	}
	constructor(client: Client, private users: WithListenable<Users>) {
		super(client)
	}
	fetch(options?: Organizations["options"]): Organizations["value"] {
		options = options ?? this.options
		return (this.listenable.value = !options?.organization
			? undefined
			: this.client.organization
					.fetch(options.organization)
					.then(response => (!isOrganizations(response) ? false : response)))
	}
	async removeUser(email: string): Promise<userwidgets.Organization | false> {
		const promise = !this.options.organization
			? Promise.resolve(false as const)
			: this.client.organization
					.removeUser(this.options.organization, email)
					.then(response => (!userwidgets.Organization.is(response) ? false : response))
		const result = await promise
		if (result)
			this.users.fetch()
		return result
	}
	static create(
		client: Client,
		users: WithListenable<Users>,
		options: WithListenable<Options>
	): WithListenable<Organizations> {
		const backend = new this(client, users)
		const listenable = Listenable.load(backend)
		options.listen("value", options => (backend.options = options))
		return listenable
	}
}

const isOrganizations = model.createIsArrayOf((value): value is userwidgets.Organization =>
	userwidgets.Organization.is(value)
)
