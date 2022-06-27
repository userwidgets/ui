import { Component, h, Listen, State } from "@stencil/core"
import "smoothly"
import { App as SmoothlyApp } from "smoothly"

@Component({
	tag: "uw-app",
	styleUrl: "style.css",
	scoped: true,
})
export class App {
	@State() loggedIn: boolean = sessionStorage.getItem("jwt") != null ? true : false
	@Listen("loggedIn")
	async handleLoggedIn() {
		this.loggedIn = true
	}
	render() {
		return (
			<uw-login>
				<SmoothlyApp label="Weekmeter">
					<smoothly-room path="/temp" label="Temp">
						<a-table
							data={{ data: <p>hello world</p>, next: { data: <div>hello again</div>, next: undefined } }}></a-table>
					</smoothly-room>
					{!this.loggedIn ? (
						<smoothly-room path="/register" label="Register">
							<uw-register></uw-register>
						</smoothly-room>
					) : null}
					{this.loggedIn ? (
						<smoothly-room path="/logout" label="Logout">
							<uw-logout></uw-logout>
						</smoothly-room>
					) : null}
				</SmoothlyApp>
			</uw-login>
		)
	}
}
