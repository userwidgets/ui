import { Listenable, WithListenable } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { Client } from "../Client"
import { Base } from "./Base"

export class Me extends Base<Me, Client> {
	#key?: Me["key"]
	get key(): userwidgets.User.Key | false | undefined {
		return this.#key ?? (this.#onUnauthorized && this.#onUnauthorized(), undefined)
	}
	set key(key: Me["key"]) {
		this.#key = key
	}
	#onUnauthorized?: () => Promise<boolean>
	set onUnauthorized(onUnauthorized: () => Promise<boolean>) {
		this.#onUnauthorized = onUnauthorized
		this.client.onUnauthorized = onUnauthorized
	}
	async login(user: userwidgets.User.Credentials): Promise<userwidgets.User.Key | false> {
		const result = await this.client.me
			.login(user)
			.then(response => (!userwidgets.User.Key.is(response) ? false : response))
		if (result)
			this.listenable.key = result
		return result
	}
	async register(
		tag: userwidgets.User.Tag,
		credentials: userwidgets.User.Credentials.Register
	): Promise<userwidgets.User.Key | false> {
		const result = await this.client.me
			.register(tag, credentials)
			.then(response => (!userwidgets.User.Key.is(response) ? false : response))
		if (result)
			this.listenable.key = result
		return result
	}
	async join(tag: userwidgets.User.Tag) {
		const result = await this.client.me
			.join(tag)
			.then(response => (!userwidgets.User.Key.is(response) ? false : response))
		if (result)
			this.listenable.key = result
		return result
	}
	logout(): void {
		window.sessionStorage.clear()
	}
	static create(client: Client): WithListenable<Me> {
		const backend = new this(client)
		const listenable = Listenable.load(backend)
		const key = window.sessionStorage.getItem("token")
		if (key)
			userwidgets.User.Key.unpack(key).then(key => (listenable.key = key || false))
		return listenable
	}
}
