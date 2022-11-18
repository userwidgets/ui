import { Client } from "../Client"
import { model } from "../model"
import { Listenable } from "./Listenable"
import { Options } from "./Options"

export class Me {
	#options: Options = {}
	get options(): Options {
		return this.#options
	}
	set options(options: Options) {
		this.#options.key != options.key
			? (this.#self.options = { ...this.#options, ...options, key: this.#options.key })
			: (this.#options = { ...this.#options, ...options })
	}
	#key?: Promise<model.userwidgets.User.Key | false>
	get key(): Promise<model.userwidgets.User.Key | false> | undefined {
		return this.#key ?? (this.#loginTrigger && this.#loginTrigger(), this.#key)
	}
	set key(key: Promise<model.userwidgets.User.Key | false> | undefined) {
		this.#key = key
	}
	#loginTrigger?: () => Promise<boolean>
	set loginTrigger(loginTrigger: () => Promise<boolean>) {
		this.#loginTrigger = loginTrigger
	}
	#self: Me & Listenable<Me>
	private constructor(listenable: Me & Listenable<Me>, private client: Client) {
		this.#self = listenable
	}
	private initializeKey(token: string): void {
		model.userwidgets.User.Key.unpack(token).then(
			key => key && ((this.#self.key = Promise.resolve(key)), (this.#self.options = this.#options = { key: key }))
		)
	}
	async login(user: model.userwidgets.User.Credentials): Promise<model.userwidgets.User.Key | false> {
		const promise = !this.#options.applicationId
			? (Promise.resolve(false) as Promise<false>)
			: this.client.me
					.login(this.#options.applicationId, user)
					.then(response => (!model.userwidgets.User.Key.is(response) ? false : response))
		const result = await promise
		result && ((this.#self.key = promise), (this.#self.options = this.#options = { key: result }))
		return result
	}
	async join(tag: model.userwidgets.User.Tag): Promise<model.userwidgets.User.Key | false> {
		const promise = this.client.me
			.join(tag)
			.then(response => (!model.userwidgets.User.Key.is(response) ? false : response))
		const result = await promise
		result && ((this.#self.key = promise), (this.#self.options = this.#options = { key: result }))
		return result
	}
	logout(): void {
		window.sessionStorage.clear()
		this.client.key = undefined
		this.#self.key = undefined
		this.#self.options = { ...(this.#options = { key: undefined }), organizationId: undefined }
	}
	async register(
		tag: model.userwidgets.User.Tag,
		credentials: model.userwidgets.User.Credentials.Register
	): Promise<model.userwidgets.User.Key | false> {
		const promise = this.client.me
			.register(tag, credentials)
			.then(response => (!model.userwidgets.User.Key.is(response) ? false : response))
		const response = await promise
		response && ((this.#self.key = promise), (this.#self.options = this.#options = { key: response }))
		return response
	}
	static create(client: Client): Me & Listenable<Me> {
		const self = new Listenable<Me>() as Me & Listenable<Me>
		Listenable.load(new this(self, client), self)
		client.key && self.initializeKey(client.key)
		return self
	}
}
