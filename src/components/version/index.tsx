import { Component, h, State } from "@stencil/core"
import { store } from "../../Store"

@Component({
	tag: "template-version",
	styleUrl: "style.css",
	scoped: true,
})
export class ApiVersion {
	@State() apiInformation?: { name: string; version: string }
	@State() error?: string

	async componentWillLoad() {
		store.version.listen("changed", version => (this.apiInformation = version))
	}

	render() {
		return this.apiInformation ? (
			<p>
				Current {this.apiInformation.name} version: {this.apiInformation.version}
			</p>
		) : (
			<p>Loading api information...</p>
		)
	}
}
