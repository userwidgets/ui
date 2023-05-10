import { userwidgets } from "@userwidgets/model"

const url = new URL(window.location.href)
const backend =
	url.searchParams.get("backend") ??
	(url.hostname == "localhost" || url.hostname == "127.0.0.1" ? "http://localhost:8788" : "https://api.userwidgets.com")
const token = window.sessionStorage.getItem("token") ?? undefined

export const client = userwidgets.Client.create(backend, token)
