import { Listenable, StateBase, WithListenable } from "smoothly"
import { userwidgets } from "@userwidgets/model"

export class Invite extends StateBase<Invite, userwidgets.ClientCollection> {
	private request?: Promise<Invite["value"]>
	#value?: Invite["value"]
	get value(): string | false | undefined {
		return this.#value ?? (this.fetch(), undefined)
	}
	set value(value: Invite["value"]) {
		this.#value = value
	}
	async fetch(): Promise<Exclude<Invite["value"], undefined>> {
		const id = new URL(window.location.href).searchParams.get(this.client.configuration.inviteParameterName)
		const promise = !id
			? undefined
			: (this.request ??= this.client.me.invite
					.fetch(id)
					.then(response => (typeof response == "string" ? response : false)))
		const result = await promise
		if (promise == this.request)
			this.request = undefined
		return (this.listenable.value = result) || false
	}
	static create(client: userwidgets.ClientCollection): WithListenable<Invite> {
		return Listenable.load(new this(client))
	}
}
