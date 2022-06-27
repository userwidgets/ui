import * as gracely from "gracely"
import * as rest from "cloudly-rest"
// import { Client } from "./index"

export class Version extends rest.Collection<gracely.Error> {
	async fetch(): Promise<{ name: string; version: string } | gracely.Error> {
		return await this.client.get<{ name: string; version: string } | gracely.Error>("api/version")
	}
}
