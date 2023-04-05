import { WithListenable } from "smoothly"
import { Applications } from "../State/Applications"
import { Languages } from "../State/Languages"
import { Me } from "../State/Me"
import { Options } from "../State/Options"
import { Organizations } from "../State/Organizations"
import { Users } from "../State/Users"

export interface States {
	me: WithListenable<Me>
	user: WithListenable<Users>
	organization: WithListenable<Organizations>
	application: WithListenable<Applications>
	options: WithListenable<Options>
	language: WithListenable<Languages>
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
