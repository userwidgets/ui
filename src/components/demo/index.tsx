import { Component, h } from "@stencil/core"
import { App } from "smoothly"

@Component({
	tag: "userwidgets-demo",
	styleUrl: "style.css",
	scoped: true,
})
export class Demo {
	render() {
		return (
			<App label="Userwidgets ui demo">
				<smoothly-room path="/version">
					<userwidgets-demo-version></userwidgets-demo-version>
				</smoothly-room>
			</App>
		)
	}
}
