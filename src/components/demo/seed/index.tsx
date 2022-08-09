import { Component, h } from "@stencil/core"
import { client } from "../../../client"

@Component({
	tag: "userwidget-seed",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetSeed {
	componentWillLoad() {
		client.seed.fetch()
	}
	render() {
		return <p>Attempting to seed</p>
	}
}
