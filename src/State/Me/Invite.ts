import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"

export class Invite extends smoothly.StateBase<Invite, userwidgets.ClientCollection> {
	private request?: Promise<Invite["value"]>
	#value?: Invite["value"]
	get value(): string | false | undefined {
		return this.#value ?? (this.fetch(), undefined)
	}
	set value(value: Invite["value"]) {
		this.#value = value
	}
	async fetch(): Promise<NonNullable<Invite["value"]>> {
		const invite = new URL(window.location.href).searchParams.get(this.client.configuration.inviteParameterName)
		const promise = !invite
			? undefined
			: invite.match(/^[^.]+\.[^.]+\.[^.]+$/)
			? invite
			: (this.request ??= this.client.me.invite
					.fetch(invite)
					.then(response => (typeof response == "string" ? response : false)))
		const result = await promise
		if (promise == this.request)
			this.request = undefined
		if (this.#value != result)
			this.listenable.value = result
		return result || false
	}
	static create(client: userwidgets.ClientCollection): smoothly.WithListenable<Invite> {
		return smoothly.Listenable.load(new this(client))
	}
}
