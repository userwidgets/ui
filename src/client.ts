import { Client } from "./Client"

const appUrl = new URL(window.location.href)
let apiUrl: string
try {
	apiUrl =
		appUrl.searchParams.get("userwidgetPreview") ??
		(appUrl.hostname == "localhost" || appUrl.hostname == "127.0.0.1"
			? process.env.localUrl
			: process.env.productionUrl) ??
		window.origin
} catch (e) {
	apiUrl = window.origin
}
export const client = Client.create(apiUrl, window.sessionStorage.getItem("token") ?? undefined)
