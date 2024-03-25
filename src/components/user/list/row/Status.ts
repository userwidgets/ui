import { smoothly } from "smoothly"

export interface Status {
	name: string
	hue: number
	description: string
	icon?: smoothly.Icon
}
export namespace Status {
	export const labels = {
		"2fa": { name: "2fa", hue: 175, description: "User has two factor authentication enabled." },
		password: {
			name: "password",
			hue: 225,
			description: "User last changed their password on this date.",
			icon: "lock-closed" as const,
		},
	}
}
