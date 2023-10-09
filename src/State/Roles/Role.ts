import { langly } from "langly"

export interface Role {
	permissions: (id: string) => string
	readonly label: string
}
export namespace Role {
	export type Translate = {
		default?: langly.Translate | undefined
		custom?: langly.Translate | undefined
	}
	export function from(permissions: string[]): Role[] {
		return permissions.map(permission => ({
			permissions: id => `${id}.${permission}`,
			label: (permission.at(0)?.toLocaleUpperCase() ?? "") + permission.slice(1).split(".").join(" "),
		}))
	}
	export function translate(role: Role, translate: Translate): Role {
		return (({ label: display, ...role }) => ({
			...role,
			get label(): string {
				const custom = translate.custom?.(display) ?? display
				const result = translate.default?.(custom) ?? display
				return result
			},
		}))(role)
	}
}
