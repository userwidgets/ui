import { Listenable, WithListenable } from "smoothly"
import { StateBase } from "smoothly"
import { userwidgets } from "@userwidgets/model"

export class Me extends StateBase<Me, userwidgets.ClientCollection> {
	constructor(client: userwidgets.ClientCollection) {
		super(client)
		client.configuration.publicKey
	}
	get inviteParameterName(): string {
		return this.client.configuration.inviteParameterName
	}

	#key?: Me["key"]
	get key(): userwidgets.User.Key | false | undefined {
		return this.#key ?? (this.#onUnauthorized?.(), undefined)
	}
	set key(key: Me["key"]) {
		this.#key = key
		if (key) {
			sessionStorage.setItem("token", key.token)
			this.client.key = key.token
		} else
			sessionStorage.removeItem("token")
	}
	#onUnauthorized: Me["onUnauthorized"]
	get onUnauthorized(): (() => Promise<boolean>) | undefined {
		return this.#onUnauthorized
	}
	set onUnauthorized(onUnauthorized: Me["onUnauthorized"]) {
		this.#onUnauthorized = onUnauthorized
		this.client.onUnauthorized = onUnauthorized
	}
	async login(user: userwidgets.User.Credentials): Promise<Me["key"]> {
		const result = await this.client.me
			.login(user)
			.then(response => (!userwidgets.User.Key.is(response) ? false : response))
		if (result) {
			this.listenable.key = result
			sessionStorage.setItem("token", result.token)
		}
		return result
	}
	async register(
		invite: userwidgets.User.Invite,
		credentials: userwidgets.User.Credentials.Register
	): Promise<Me["key"]> {
		const result = await this.client.me
			.register(invite, credentials)
			.then(response => (!userwidgets.User.Key.is(response) ? false : response))
		if (result) {
			this.listenable.key = result
			sessionStorage.setItem("token", result.token)
		}
		return result
	}
	async join(invite: userwidgets.User.Invite) {
		const result = await this.client.me
			.join(invite)
			.then(response => ("issuer" in response ? response : response.status == 410 ? this.#key : false))
		if (result) {
			this.listenable.key = result
			sessionStorage.setItem("token", result.token)
		}
		return result
	}
	logout(): void {
		window.sessionStorage.clear()
	}
	static create(client: userwidgets.ClientCollection): WithListenable<Me> {
		const backend = new this(client)
		const listenable = Listenable.load(backend)
		const key = window.sessionStorage.getItem("token")
		if (key)
			userwidgets.User.Key.Verifier.create(client.configuration.publicKey)
				.verify(key)
				.then(key => (listenable.key = key || false))
		return listenable
	}
}
