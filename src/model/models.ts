import { WithListenable } from "smoothly"
import type { Client as UserwidgetsClient } from "../Client"
import type { State as UserwidgetsState } from "../State"
import { Locales } from "../State/Locales"
export interface State {
	me: WithListenable<UserwidgetsState.Me>
	users: WithListenable<UserwidgetsState.Users>
	organizations: WithListenable<UserwidgetsState.Organizations>
	applications: WithListenable<UserwidgetsState.Applications>
	locales: WithListenable<Locales>
}

export function createIsArrayOf<T>(is: (value: any | T) => value is T): (value: any | T[]) => value is T[] {
	return (value): value is T[] => Array.isArray(value) && value.every(is)
}
export function nest<T extends Record<string, any>>(target: T, [head, ...tail]: string[], value: any): T {
	return (
		(target[head as keyof T] = tail.length
			? nest(target[head] != undefined ? target[head] : (target[head as keyof T] = {} as T[keyof T]), tail, value)
			: value),
		target as T
	)
}

export type Client = {
	application: UserwidgetsClient.Application
	organization: UserwidgetsClient.Organization
	me: UserwidgetsClient.Me
	user: UserwidgetsClient.User
	onUnauthorized: UserwidgetsClient.Unauthorized
}

type Value = string | number | boolean | Blob | undefined
export type Data = { [name: string]: Data | Value }
