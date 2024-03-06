import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { Me } from "./Me"

export class Applications extends smoothly.StateBase<Applications, userwidgets.ClientCollection> {
	private request?: Promise<Exclude<Applications["current"], undefined>>
	#current?: Applications["current"]
	get current(): userwidgets.Application | false | undefined {
		return this.#current ?? (this.fetch(), undefined)
	}
	set current(current: Applications["current"]) {
		this.#current = current
	}
	private constructor(client: userwidgets.ClientCollection, private me: smoothly.WithListenable<Me>) {
		super(client)
	}
	async fetch(): Promise<userwidgets.Application | false> {
		let result: userwidgets.Application | false
		if (this.request)
			result = await this.request
		else {
			const request = !this.me.key
				? false
				: this.client.application.fetch().then(result => (!userwidgets.Application.is(result) ? false : result))
			this.request = request || undefined
			result = await request
			this.request = undefined
			if (this.#current !== result)
				this.listenable.current = result
		}
		return result || false
	}
	private subscriptions = {
		key: (key: Me["key"]) => {
			if (this.#current !== undefined)
				if (key !== undefined)
					(this.request = undefined), this.fetch()
				else if (key === undefined)
					this.listenable.current = undefined
		},
	}
	static create(
		client: userwidgets.ClientCollection,
		me: smoothly.WithListenable<Me>
	): smoothly.WithListenable<Applications> {
		const backend = new this(client, me)
		const listenable = smoothly.Listenable.load(backend)
		me.listen("key", key => backend.subscriptions.key(key), { lazy: true })
		return listenable
	}
}
