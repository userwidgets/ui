import { Component, h, Listen, Prop, State } from "@stencil/core"
import "webcomponent-qr-code"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"

@Component({
	tag: "userwidgets-two-factor",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsTwoFactor {
	@Prop() state: model.State
	@State() copied: boolean
	@State() recoveryCodes?: string[]
	@State() key: false | userwidgets.User.Key | undefined
	authenticateKey: string
	componentWillLoad() {
		this.state.me.listen("key", key => (this.key = key))
	}
	copyText(value?: string[]) {
		if (value) {
			navigator.clipboard.writeText(value.join("\n"))
			this.copied = true
		}
	}
	@Listen("twoFactor")
	async twoFactorListener(
		event: CustomEvent<Pick<smoothly.Submit, "result"> & { user: userwidgets.User.Changeable; code: string }>
	): Promise<void> {
		if (this.key && (await this.state.users.update(this.key.email, { twoFactor: event.detail.user.twoFactor }))) {
			this.recoveryCodes = event.detail.user.twoFactor?.recoveryCodes
			event.detail.result(true)
		} else
			event.detail.result(false)
	}
	render() {
		return !this.recoveryCodes ? (
			<userwidgets-two-factor-setup userKey={this.key}></userwidgets-two-factor-setup>
		) : (
			<userwidgets-two-factor-recovery recoveryCodes={this.recoveryCodes}></userwidgets-two-factor-recovery>
		)
	}
}
