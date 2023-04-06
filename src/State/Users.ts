import { Listenable, WithListenable } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { Client } from "../Client"
import { model } from "../model"
import { Base } from "./Base"
import { Options } from "./Options"

export class Users extends Base<Users, Client> {
	#options: Users["options"] = {}
	private get options(): Options["value"] {
		return this.#options
	}
	private set options(options: Users["options"]) {
		options = { ...this.#options, ...options }
		if (this.value)
			if ((this.#options.key && !options.key) || (this.#options.organization && !options.organization))
				this.listenable.value = undefined
			else if (this.#options.key != options.key)
				this.fetch()
		this.#options = options
	}
	#value?: Users["value"]
	get value(): Promise<userwidgets.User.Readable[] | false> | undefined {
		return this.#value ?? this.fetch()
	}
	set value(value: Users["value"]) {
		this.#value = value
	}
	fetch(): Promise<userwidgets.User.Readable[] | false> {
		return (this.listenable.value = this.client.user.list().then(response => (!isUsers(response) ? false : response)))
	}
	async updatePermissions(
		email: string,
		permissions: userwidgets.User.Permissions.Readable
	): Promise<userwidgets.User.Readable | false> {
		const promise = !this.options.organization
			? Promise.resolve(false as const)
			: this.client.user
					.updatePermissions(email, this.options.organization, permissions)
					.then(response => (!userwidgets.User.Readable.is(response) ? false : response))
		const result = await promise
		if (result)
			this.fetch()
		return result
	}
	static create(client: Client): WithListenable<Users> {
		const backend = new this(client)
		const listenable = Listenable.load(backend)
		return listenable
	}
}

const isUsers = model.createIsArrayOf((value): value is userwidgets.User.Readable =>
	userwidgets.User.Readable.is(value)
)
