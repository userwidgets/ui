import { Component, h, Host } from "@stencil/core"
import "smoothly"
import { client } from "../../Client"
import { State } from "../../State"

@Component({
	tag: "userwidgets-demo",
	styleUrl: "style.css",
	scoped: true,
})
export class Demo {
	private state = State.create(client.userwidgets)
	render() {
		return (
			<Host>
				<userwidgets-login state={this.state}>
					<smoothly-app label="Userwidgets ui demo">
						<smoothly-app-room path={"/user"} label={"User"}>
							<userwidgets-demo-user state={this.state} />
						</smoothly-app-room>
						<smoothly-app-room path={"/organization"} label="Organization">
							<userwidgets-demo-organization state={this.state} />
						</smoothly-app-room>
					</smoothly-app>
				</userwidgets-login>
			</Host>
		)
	}
}
