import { smoothly } from "smoothly"
import { Client } from "../../../Client"
import { State as UserwidgetsState } from "../../../State"
import * as translation from "./translation"

export class State extends smoothly.StateBase<State, Client> {
	readonly userwidgets = UserwidgetsState.create(this.client.userwidgets)
	static create(client: Client): smoothly.WithListenable<State> {
		const backend = new this(client)
		const listenable = smoothly.Listenable.load(backend)
		listenable.userwidgets.roles.translator = translation.create
		// listenable.userwidgets.roles.value = [
		// 	{ label: "Super admin", permissions: id => `* ${id}` },
		// 	{ label: "Admin", permissions: id => `${id}` },
		// 	{ label: "User", permissions: id => `${id}.user.view ${id}.user.invite` },
		// ]
		return listenable
	}
}
