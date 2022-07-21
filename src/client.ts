import { Client } from "./Client"
import { model } from "./model"

const appUrl = new URL(window.location.href)
let apiUrl: string
try {
	apiUrl =
		appUrl.searchParams.get("userwidgetsPreview") ??
		(appUrl.hostname == "localhost" || appUrl.hostname == "127.0.0.1"
			? process.env.localUrl
			: process.env.productionUrl) ??
		window.origin
} catch (e) {
	apiUrl = window.origin
}

const key = window.sessionStorage.getItem("key")
export const client = Client.create(
	apiUrl,
	(key && model.userwidgets.User.Key.is(key) ? JSON.parse(key) : undefined)?.token ?? undefined
)
