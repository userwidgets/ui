import { Listenable, WithListenable } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../model"
import { Base } from "./Base"

export class Me extends Base<Me, model.Client> {
	#jwtParameter?: Me["jwtParameter"]
	get jwtParameter(): string | undefined {
		return this.#jwtParameter
	}
	set jwtParameter(jwtParameter: Me["jwtParameter"]) {
		this.#jwtParameter = jwtParameter
	}
	#key?: Me["key"]
	get key(): userwidgets.User.Key | false | undefined {
		return this.#key ?? (this.#onUnauthorized?.(), undefined)
	}
	set key(key: Me["key"]) {
		this.#key = key
		if (key)
			sessionStorage.setItem("token", key.token), (this.client.key = key.token)
		else
			sessionStorage.removeItem("token")
	}
	#onUnauthorized?: () => Promise<boolean>
	set onUnauthorized(onUnauthorized: () => Promise<boolean>) {
		this.#onUnauthorized = onUnauthorized
		this.client.onUnauthorized = onUnauthorized
	}
	get onUnauthorized(): any {
		return this.#onUnauthorized
	}
	async login(user: userwidgets.User.Credentials): Promise<Me["key"]> {
		const result = await this.client.me
			.login(user)
			.then(response => (!userwidgets.User.Key.is(response) ? false : response))
		if (result)
			this.listenable.key = result
		return result
	}
	async register(tag: userwidgets.User.Tag, credentials: userwidgets.User.Credentials.Register): Promise<Me["key"]> {
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
			.then(response => ("issuer" in response ? response : response.status == 410 ? this.#key : false))
		if (result)
			this.listenable.key = result
		return result
	}
	logout(): void {
		window.sessionStorage.clear()
	}
	static create(client: model.Client): WithListenable<Me> {
		const backend = new this(client)
		const listenable = Listenable.load(backend)
		const key = window.sessionStorage.getItem("token")
		if (key)
			userwidgets.User.Key.unpack(key).then(key => (listenable.key = key || false))
		return listenable
	}
}
