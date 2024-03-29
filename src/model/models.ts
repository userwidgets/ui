import { State as UserwidgetsState } from "../State"
import { Role as RolesRole } from "../State/Roles/Role"

export type State = UserwidgetsState
export const State = UserwidgetsState
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

type Value = string | number | boolean | Blob | undefined
export type Data = { [name: string]: Data | Value }
export type Role = RolesRole
export const Role = RolesRole
