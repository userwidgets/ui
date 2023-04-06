import { WithListenable } from "smoothly"
import { Applications } from "../State/Applications"
import { Locales } from "../State/Locales"
import { Me } from "../State/Me"
import { Options } from "../State/Options"
import { Organizations } from "../State/Organizations"
import { Users } from "../State/Users"

export interface States {
	me: WithListenable<Me>
	users: WithListenable<Users>
	organizations: WithListenable<Organizations>
	applications: WithListenable<Applications>
	options: WithListenable<Options>
	locales: WithListenable<Locales>
}
export type State = WithListenable<States>

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
export function redirect(_: string): void {
	return
}
