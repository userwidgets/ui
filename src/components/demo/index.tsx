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
			<userwidgets-login>
				<App label="Userwidgets ui demo">
					<smoothly-room path="/version" label="Version">
						<userwidgets-demo-version></userwidgets-demo-version>
					</smoothly-room>
					<smoothly-room path="/login" label="Login">
						<userwidgets-login-trigger></userwidgets-login-trigger>
					</smoothly-room>
				</App>
			</userwidgets-login>
		)
	}
}
