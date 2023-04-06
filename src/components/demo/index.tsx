import { Component, h } from "@stencil/core"
import "smoothly"
import { state } from "../../State"

@Component({
	tag: "userwidgets-demo",
	styleUrl: "style.css",
	scoped: true,
})
export class Demo {
	render() {
		return (
			<userwidgets-login state={state}>
				<smoothly-app label="Userwidgets ui demo">
					<smoothly-app-room path="/version" label="Version">
						<userwidgets-demo-version></userwidgets-demo-version>
					</smoothly-app-room>
					<smoothly-app-room path="/login" label="Login">
						<userwidgets-login-trigger state={state}></userwidgets-login-trigger>
					</smoothly-app-room>
					<smoothly-app-room path="/register">
						<userwidgets-register state={state}></userwidgets-register>
					</smoothly-app-room>
					<smoothly-app-room path={"/user-list"} label={"User list"}>
						<userwidgets-user-list-member state={state}></userwidgets-user-list-member>
						<userwidgets-user-list-invited state={state}></userwidgets-user-list-invited>
					</smoothly-app-room>
					{state.me.key ? (
						<userwidgets-menu slot="header">
							<userwidgets-organization-picker state={state}></userwidgets-organization-picker>
							<userwidgets-logout state={state}></userwidgets-logout>
						</userwidgets-menu>
					) : null}
				</smoothly-app>
			</userwidgets-login>
		)
	}
}
