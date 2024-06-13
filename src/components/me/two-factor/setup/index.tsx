import { Component, Event, EventEmitter, h, Host, Prop, State, VNode } from "@stencil/core"
import { cryptly } from "cryptly"
import { isoly } from "isoly"
import "webcomponent-qr-code"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../../model"

@Component({
	tag: "userwidgets-two-factor-setup",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsTwoFactorSetup {
	@Prop() state: model.State
	@Prop() userKey: false | userwidgets.User.Key | undefined
	@State() initialCode?: string
	@State() qrCode?: string
	@Event() notice: EventEmitter<smoothly.Notice>
	@Event() twoFactor: EventEmitter<
		Pick<smoothly.Submit, "result"> & { user: userwidgets.User.Changeable; code: string }
	>
	private authenticateKey: string

	getQRCode(): string | undefined {
		let result = undefined
		this.authenticateKey ??= cryptly.Identifier.generate(8)
		if (this.userKey)
			result = cryptly.authenticator.toQrCode(this.authenticateKey, this.userKey.audience, this.userKey.email)
		return result
	}
	async submitHandler(event: CustomEvent<smoothly.Submit>): Promise<void> {
		event.stopPropagation()
		const now = isoly.DateTime.now()
		if (
			(await cryptly.authenticator.generate(this.authenticateKey, isoly.DateTime.epoch(now, "milliseconds"))) ==
				this.initialCode &&
			this.userKey
		) {
			const twoFactor = {
				key: this.authenticateKey,
				recoveryCodes: await cryptly.authenticator.generateRecoveryCodes(
					this.authenticateKey,
					[1, 2, 3, 4, 5, 6].map(y => isoly.DateTime.epoch(isoly.DateTime.previousYear(now, y), "milliseconds"))
				),
			}
			this.twoFactor.emit({ user: { twoFactor }, code: this.initialCode, result: event.detail.result })
		} else {
			this.notice.emit(smoothly.Notice.warn("Invalid two factor authentication code."))
			event.detail.result(false)
		}
	}
	render(): VNode | VNode[] {
		return (
			<Host>
				<smoothly-display>
					We recommend downloading and installing{" "}
					<a href="https://apps.apple.com/us/app/google-authenticator/id388497605">Google Authenticator (iOS)</a>,{" "}
					<a href="https://play.google.com/store/apps/details?id=com.authy.authy">Authy (Android)</a> or{" "}
					<a href="https://play.google.com/store/apps/details?id=com.azure.authenticator">
						Microsoft Authenticator (Android)
					</a>
					{"."}
				</smoothly-display>
				<p>{"Scan the code below with your authentication app."}</p>
				<qr-code data={this.getQRCode()} modulesize="6"></qr-code>
				<p>{"Please fill out the 2fa code from your authentication app."}</p>
				<div>
					<smoothly-form type={"create"} looks={"border"} onSmoothlyFormSubmit={e => this.submitHandler(e)}>
						<smoothly-input
							value={this.initialCode}
							name="code"
							onSmoothlyInput={e => (this.initialCode = e.detail.code)}>
							{"Authentication Code"}
						</smoothly-input>
						<smoothly-input-submit slot={"submit"} disabled={!this.initialCode?.match(/^\d{6}$/)}>
							<span>{"Finalize"}</span>
						</smoothly-input-submit>
					</smoothly-form>
				</div>
			</Host>
		)
	}
}
