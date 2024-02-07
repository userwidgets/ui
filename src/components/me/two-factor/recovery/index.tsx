import { Component, h, Prop, State } from "@stencil/core"

@Component({
	tag: "userwidgets-two-factor-recovery",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsTwoFactorRecovery {
	@Prop() recoveryCodes?: string[]
	@State() copied: boolean
	copyText(value?: string[]) {
		if (value) {
			navigator.clipboard.writeText(value.join("\n"))
			this.copied = true
		}
	}
	render() {
		return [
			<div>
				<smoothly-icon name="checkmark-circle" size="large" color="success" fill="clear"></smoothly-icon>
				<smoothly-display>Successfully set up two factor authentication!</smoothly-display>
			</div>,
			<smoothly-display>
				Please save recovery codes before you leave the page.{" "}
				<strong>{"Otherwise recovery codes will not be visible again."}</strong>
			</smoothly-display>,
			<smoothly-display>
				Use one of these recovery codes to access your account if you lose your authenticator device.
			</smoothly-display>,
			<div>
				<ul>
					{this.recoveryCodes?.map(code => (
						<li>{code}</li>
					))}
				</ul>
				<smoothly-icon
					name="copy-outline"
					size="small"
					onClick={() => this.copyText(this.recoveryCodes)}
					onMouseLeave={() => (this.copied = false)}></smoothly-icon>{" "}
				<div class="arrow"></div>
				<small>{this.copied ? "Copied!" : "Copy"}</small>
			</div>,
		]
	}
}
