import { Component, h } from "@stencil/core"
import "smoothly"
import { client } from "../../client"
import { State } from "../../State"

@Component({
	tag: "userwidgets-demo",
	styleUrl: "style.css",
	scoped: true,
})
export class Demo {
	private state = State.create(client)
	render() {
		return (
			<userwidgets-login state={this.state}>
				<smoothly-app label="Userwidgets ui demo">
					<smoothly-app-room path="/" label="Version">
						<userwidgets-demo-version></userwidgets-demo-version>
					</smoothly-app-room>
					<smoothly-app-room path="/register">
						<userwidgets-register state={this.state}></userwidgets-register>
					</smoothly-app-room>
					{!window.location.pathname.startsWith("/register")
						? [
								<smoothly-app-room path="/login" label="Login">
									<userwidgets-login-trigger state={this.state}></userwidgets-login-trigger>
								</smoothly-app-room>,
								<smoothly-app-room path={"/user-list"} label={"User list"}>
									<userwidgets-user-list-member state={this.state}></userwidgets-user-list-member>
									<userwidgets-user-list-invited state={this.state}></userwidgets-user-list-invited>
								</smoothly-app-room>,
						  ]
						: []}
				</smoothly-app>
			</userwidgets-login>
		)
	}
}
