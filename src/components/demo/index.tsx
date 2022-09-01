import { Component, h } from "@stencil/core"
import { App } from "smoothly"
import { store } from "../../Store"

@Component({
	tag: "userwidgets-demo",
	styleUrl: "style.css",
	scoped: true,
})
export class Demo {
	render() {
		return (
			<userwidgets-login store={store}>
				<App label="Userwidgets ui demo">
					<smoothly-room path="/version" label="Version">
						<userwidgets-demo-version></userwidgets-demo-version>
					</smoothly-room>
					<smoothly-room path="/login" label="Login">
						<userwidgets-login-trigger></userwidgets-login-trigger>
					</smoothly-room>
					<smoothly-room path="/register">
						<userwidgets-register></userwidgets-register>
					</smoothly-room>
				</App>
			</userwidgets-login>
		)
	}
}
