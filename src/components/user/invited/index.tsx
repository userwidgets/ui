import { Component, Event, EventEmitter, h, Host, Prop, State } from "@stencil/core"
import { langly } from "langly"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"
import * as translation from "./translation"

@Component({
	tag: "userwidgets-user-invited",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserInvited {
	@Prop() state: model.State
	@Prop() user: Pick<userwidgets.User, "email">
	@Prop({ mutable: true }) organization?: userwidgets.Organization | null = null
	@State() translate: langly.Translate = translation.create("en")
	@State() disabled = false
	@Event() notice: EventEmitter<smoothly.Notice>

	componentWillLoad() {
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
		if (this.organization == null)
			this.state.organizations.listen("current", organization => (this.organization = organization || undefined))
	}
	async reInvite() {
		if (!this.disabled && this.organization) {
			this.disabled = true
			const users = this.organization.users.map(email => (email != this.user.email ? email : { user: this.user.email }))
			const response = await this.state.organizations.update({ users }, { email: true })
			if (!response) {
				const message = `${this.translate("Failed to re-invite")} ${this.user.email} ${this.translate("to")} ${
					this.organization.name
				}`
				this.notice.emit(smoothly.Notice.failed(message))
			} else {
				const message = `${this.translate("Successfully re-invited")} ${this.user.email} ${this.translate("to")} ${
					this.organization.name
				}`
				this.notice.emit(smoothly.Notice.succeeded(message))
			}
			this.disabled = false
		}
	}
	async remove() {
		if (!this.disabled && this.organization) {
			this.disabled = true
			const users = this.organization.users.filter(email => email != this.user.email)
			const response = await this.state.organizations.update({ users }, { id: this.organization.id })
			if (response) {
				const message = `${this.translate("Successfully removed")} ${this.user.email} ${this.translate("from")} ${
					this.organization.name
				}`
				this.notice.emit(smoothly.Notice.succeeded(message))
			} else {
				const message = `${this.translate("Failed to remove")} ${this.user.email} ${this.translate("from")} ${
					this.organization.name
				}`
				this.notice.emit(smoothly.Notice.failed(message))
			}
			this.disabled = false
		}
	}
	render() {
		return (
			<Host>
				<slot name={`${this.user.email}-detail-start`} />
				<smoothly-form looks="grid">
					<smoothly-input name="email" readonly value={this.user.email}>
						{this.translate("Email")}
					</smoothly-input>
					<div class={"buttons"} slot="submit">
						<smoothly-button size={"flexible"} color={"success"} onClick={() => this.reInvite()}>
							<smoothly-icon
								class={"size-override"}
								name={"paper-plane-outline"}
								color={"success"}
								size={"small"}
								toolTip={`${this.translate("Re-invite")}: ${this.user.email}`}
							/>
						</smoothly-button>
						<smoothly-button size={"flexible"} color={"danger"} onClick={() => this.remove()}>
							<smoothly-icon
								class={"size-override"}
								name={"person-remove-outline"}
								color={"danger"}
								size={"small"}
								toolTip={`${this.translate("Remove")}: ${this.user.email}`}
							/>
						</smoothly-button>
					</div>
				</smoothly-form>
				<slot name={`${this.user.email}-detail-end`} />
			</Host>
		)
	}
}
