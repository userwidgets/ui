import { Component, h } from "@stencil/core"
import { App } from "smoothly"
import { state } from "../../State"

@Component({
	tag: "userwidgets-demo",
	styleUrl: "style.css",
	scoped: true,
})
export class Demo {
	componentWillLoad() {
		state.options = {
			applicationId: "issuefabApplicationId",
		}
	}
	render() {
		return (
			<userwidgets-login state={state}>
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

					<userwidgets-organization-picker slot="header"></userwidgets-organization-picker>
				</App>
			</userwidgets-login>
		)
	}
}
