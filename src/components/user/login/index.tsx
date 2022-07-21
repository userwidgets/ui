import { Component, ComponentWillLoad, h, Host, Listen, State } from "@stencil/core"
import * as gracely from "gracely"
import { model } from "../../../model"
import { store } from "../../../Store"

@Component({
	tag: "userwidgets-login",
	styleUrl: "style.css",
	scoped: true,
})
export class Login implements ComponentWillLoad {
	@State() resolve?: (result: boolean) => void
	@State() error?: gracely.Error
	@Listen("login")
	async handleLogin(event: CustomEvent<model.userwidgets.User.Credentials>) {
		event.preventDefault()
		const response = await store.me.login(event.detail)
		if (gracely.Error.is(response))
			this.error = response
		else {
			this.resolve?.(true)
			this.resolve = undefined
			this.error = undefined
		}
	}
	async componentWillLoad(): Promise<void> {
		store.me.listen("unauthorized", resolve => (this.resolve = resolve))
	}
	render() {
		return (
			<Host>
				{this.resolve ? <userwidgets-login-dialog></userwidgets-login-dialog> : []}
				<slot></slot>
			</Host>
		)
	}
}
