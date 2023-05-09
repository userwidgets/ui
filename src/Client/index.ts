import { model } from "../model"
import { Client } from "../model/Client"

const url = new URL(window.location.href)
const backend =
	url.searchParams.get("backend") ??
	(url.hostname == "localhost" || url.hostname == "127.0.0.1" ? "http://localhost:8788" : "https://api.userwidgets.com")
const token = window.sessionStorage.getItem("token") ?? undefined

export const client = Client.create<model.Client>(backend, token)
