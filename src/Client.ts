import * as gracely from "gracely"
import { userwidgets } from "@userwidgets/model"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"

const url = new URL(window.location.href)
const backend =
	url.searchParams.get("backend") ??
	(["localhost", "127.0.0.1"].includes(url.hostname) ? "http://localhost:8788" : "https://api.userwidgets.com")
const token = window.sessionStorage.getItem("token") ?? undefined
/**
 * This class works as an example how to put userwidgets.ClientCollection in a Rest-client for your app.
 */
export class Client extends rest.Client<gracely.Error> {
	readonly userwidgets = new userwidgets.ClientCollection(this.client, {
		/* You can add configuration for userwidgets client here! */
	})

	// ... In your code, you can add more collections to your client here!

	static create<T = Record<string, any>>(server: string, key?: string, load?: (client: http.Client) => T): Client & T {
		const httpClient = new http.Client<gracely.Error>(server, key)
		const result: Client = new Client(httpClient)
		if (load)
			Object.assign(result, load(httpClient))
		return result as Client & T
	}
}

export const client = Client.create(backend, token)
