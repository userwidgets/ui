import { Component, h, Host, State } from "@stencil/core"
import * as gracely from "gracely"
import { client } from "../../client"

@Component({
	tag: "template-version",
	styleUrl: "style.css",
	scoped: true,
})
export class ApiVersion {
	@State() version?: string
	@State() error?: string

	async connectedCallback() {
		const response = await client.version.fetch()
		if (gracely.Error.is(response))
			this.error = JSON.stringify(response)
		else
			this.version = response.version
	}
	render() {
		return <Host>{this.version ? `api version: ${this.version}` : this.error}</Host>
	}
}
