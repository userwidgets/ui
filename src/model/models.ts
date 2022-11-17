import * as isoly from "isoly"
export * as userwidgets from "@userwidgets/model"
export interface ResourceEntityTags {
	[entityTag: string]: isoly.DateTime | undefined
}
export interface EntityTags {
	application: ResourceEntityTags
	organization: ResourceEntityTags
	user: ResourceEntityTags
}
export function createIsArrayOf<T>(is: (value: any | T) => value is T): (value: any | T[]) => value is T[] {
	return (value): value is T[] => Array.isArray(value) && value.every(is)
}
