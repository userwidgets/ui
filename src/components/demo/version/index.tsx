import { Component, h, State } from "@stencil/core"
import { state } from "../../../State"

@Component({
	tag: "userwidgets-demo-version",
	styleUrl: "style.css",
	scoped: true,
})
export class DemoVersion {
	@State() apiInfo?: { name: string; version: string }
	componentWillRender() {
		state.version.listen("changed", apiInfo => (this.apiInfo = apiInfo))
	}
	render() {
		return this.apiInfo ? (
			<p>
				Currently using {this.apiInfo.name} version {this.apiInfo.version}
			</p>
		) : (
			<p>Fetching api info...</p>
		)
	}
}
