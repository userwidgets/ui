import { Component, h, Host } from "@stencil/core"
import "smoothly"
import { client } from "../../Client"
import { State } from "./State"

@Component({
	tag: "userwidgets-demo",
	styleUrl: "style.css",
	scoped: true,
})
export class Demo {
	private state = (console.log("creating state"), State.create(client))
	componentWillLoad() {
		Object.assign(globalThis, { state: this.state })
		console.log("assigning state")
	}
	render() {
		return (
			<Host>
				{/* <smoothly-notifier> */}
				{/* <userwidgets-login state={this.state.userwidgets}>
						<img slot={"logo"} src="https://issuefab.com/logo/issuefab-l06.svg" alt="logo" />
						<smoothly-app color="primary" label="Userwidgets ui demo">
							<smoothly-app-room path={"/user"} label={"User"}>
								<userwidgets-demo-user state={this.state.userwidgets} />
							</smoothly-app-room>
							<smoothly-app-room path={"/organization"} label="Organization">
								<userwidgets-demo-organization state={this.state.userwidgets} />
							</smoothly-app-room>
							<smoothly-app-room path={"/settings"}>
								<userwidgets-demo-settings state={this.state.userwidgets} />
							</smoothly-app-room>
							<userwidgets-me-menu slot="nav-end" state={this.state.userwidgets}>
								<smoothly-button slot="action" type="link" link={"/settings"} fill="solid" size="flexible">
									<smoothly-icon name="settings-outline" size="medium" />
								</smoothly-button>
							</userwidgets-me-menu>
						</smoothly-app>
					</userwidgets-login> */}
				{/* </smoothly-notifier> */}
			</Host>
		)
	}
}
