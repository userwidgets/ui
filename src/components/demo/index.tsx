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
			<userwidget-login>
				<App label="Userwidgets ui demo">
					<smoothly-room path="/version" label="Version">
						<userwidgets-demo-version></userwidgets-demo-version>
					</smoothly-room>
					<smoothly-room path="/seed" label="Seed">
						<userwidget-seed></userwidget-seed>
					</smoothly-room>
				</App>
			</userwidget-login>
		)
	}
}
