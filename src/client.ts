import { Client } from "../Client"
import * as model from "../model"

let apiUrl: string
try {
	apiUrl = process.env.apiUrl ?? window.origin
} catch (e) {
	apiUrl = window.origin
}
console.log(apiUrl)
const key = window.sessionStorage.getItem("key")
export const client = Client.create(
	apiUrl,
	(key && model.User.Key.is(key) ? JSON.parse(key) : undefined)?.token ?? undefined
)
