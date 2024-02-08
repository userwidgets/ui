import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { Invite } from "./Invite"

export class Me extends smoothly.StateBase<Me, userwidgets.ClientCollection> {
	readonly invite = Invite.create(this.client)
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
	async login(
		user: userwidgets.User.Credentials | userwidgets.User.Key,
		twoFactor?: string
	): Promise<Me["key"] | userwidgets.User.Unauthenticated> {
		let result: Me["key"] | userwidgets.User.Unauthenticated
		const attempted = await this.client.me.login(user, twoFactor)
		if (userwidgets.User.Key.is(attempted) && this.#key != attempted) {
			this.listenable.key = attempted
			result = attempted
		} else if (userwidgets.User.Unauthenticated.is(attempted))
			result = attempted
		else {
			result = false
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
		if (result && this.#key != result) {
			this.listenable.key = result
			sessionStorage.setItem("token", result.token)
		}
		return result
	}
	async join(invite: userwidgets.User.Invite) {
		const result = !this.key
			? undefined
			: await this.client.me
					.join(invite)
					.then(response => ("issuer" in response ? response : response.status == 410 ? this.#key : false))
		if (result && this.#key != result) {
			this.listenable.key = result
			sessionStorage.setItem("token", result.token)
		}
		return result
	}
	logout(): void {
		this.listenable.key = undefined
		window.sessionStorage.clear()
	}
	static create(client: userwidgets.ClientCollection): smoothly.WithListenable<Me> {
		const backend = new this(client)
		const listenable = smoothly.Listenable.load(backend)
		const key = window.sessionStorage.getItem("token")
		if (key)
			userwidgets.User.Key.Verifier.create(client.configuration.publicKey)
				.verify(key)
				.then(key => (listenable.key = key || false))
		return listenable
	}
}
