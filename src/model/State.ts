import { WithListenable } from "smoothly"
import type { State as UserwidgetsState } from "../State"
import { Locales } from "../State/Locales"

export interface State {
	me: WithListenable<UserwidgetsState.Me>
	users: WithListenable<UserwidgetsState.Users>
	organizations: WithListenable<UserwidgetsState.Organizations>
	applications: WithListenable<UserwidgetsState.Applications>
	locales: WithListenable<Locales>
}
