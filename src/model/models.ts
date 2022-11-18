import * as isoly from "isoly"
import { Application, Me, Organization, User } from "../State"
import { Listenable } from "../State/Listenable"
import { Options } from "../State/Options"
export * as userwidgets from "@userwidgets/model"
export interface ResourceEntityTags {
	[entityTag: string]: isoly.DateTime | undefined
}
export interface EntityTags {
	application: ResourceEntityTags
	organization: ResourceEntityTags
	user: ResourceEntityTags
}
export interface States {
	me: Me & Listenable<Me>
	user: User & Listenable<User>
	organization: Organization & Listenable<Organization>
	application: Application & Listenable<Application>
	options: Options
	onUnauthorized: () => Promise<boolean>
}
export type State = States & Listenable<States>

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
