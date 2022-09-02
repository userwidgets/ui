import { Component, h, State } from "@stencil/core"
import { state } from "../../State"

@Component({
	tag: "userwidgets-version",
	styleUrl: "style.css",
	scoped: true,
})
export class ApiVersion {
	@State() apiInformation?: { name: string; version: string }
	@State() error?: string

	async componentWillLoad() {
		state.version.listen("changed", version => (this.apiInformation = version))
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
