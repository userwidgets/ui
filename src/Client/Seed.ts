import * as gracely from "gracely"
import * as rest from "cloudly-rest"

export class Seed extends rest.Collection<gracely.Error> {
	async fetch(): Promise<gracely.Result> {
		return await this.client.get<gracely.Result>(`api/seed`)
	}
}
