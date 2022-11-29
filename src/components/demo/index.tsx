import { Component, h } from "@stencil/core"
import { App } from "smoothly"
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
				<App label="Userwidgets ui demo">
					<smoothly-room path="/version" label="Version">
						<userwidgets-demo-version></userwidgets-demo-version>
					</smoothly-room>
					<smoothly-room path="/login" label="Login">
						<userwidgets-login-trigger state={state}></userwidgets-login-trigger>
					</smoothly-room>
					<smoothly-room path="/register">
						<userwidgets-register state={state}></userwidgets-register>
					</smoothly-room>
					<smoothly-room path={"/user-list"} label={"User list"}>
						<userwidgets-user-list-member state={state}></userwidgets-user-list-member>
						<userwidgets-user-list-invited state={state}></userwidgets-user-list-invited>
					</smoothly-room>
					{state.me.key ? (
						<userwidgets-menu slot="header">
							<userwidgets-organization-picker state={state}></userwidgets-organization-picker>
							<userwidgets-logout state={state}></userwidgets-logout>
						</userwidgets-menu>
					) : null}
				</App>
			</userwidgets-login>
		)
	}
}
