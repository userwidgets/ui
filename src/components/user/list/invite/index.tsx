import { Component, Event, EventEmitter, h, Host, Prop, State } from "@stencil/core"
import { langly } from "langly"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../../model"
import * as translation from "./translation"
@Component({
	tag: "userwidgets-user-list-invite",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserListInvite {
	private form?: HTMLSmoothlyFormElement
	@Prop() state: model.State
	@Prop({ mutable: true }) organization?: userwidgets.Organization | null = null
	@State() invite?: Partial<userwidgets.Organization.Changeable.Invite> = {}
	@State() translate: langly.Translate = translation.create("en")
	@State() disabled = false
	@Event() userwidgetsFormControls: EventEmitter<{ clear: () => void }>
	@Event() notice: EventEmitter<smoothly.Notice>

	componentWillLoad() {
		this.userwidgetsFormControls.emit({ clear: () => this.form?.clear() })
		if (this.organization === null)
			this.state.organizations.listen("current", organization => (this.organization = organization || undefined))
	}

	inputHandler(event: CustomEvent<smoothly.Data>) {
		event.stopPropagation()
	}

	async submitHandler(event: CustomEvent<smoothly.Data>) {
		this.inputHandler(event)
		if (!this.organization) {
			const message = `${this.translate("No organization selected")}`
			this.notice.emit(smoothly.Notice.failed(message))
		} else if (!userwidgets.Organization.Changeable.Invite.is(event.detail)) {
			const message = `${this.translate("Invalid form")}`
			this.notice.emit(smoothly.Notice.failed(message))
		} else {
			const form = event.detail
			this.disabled = true
			const users = this.organization.users.includes(event.detail.user)
				? this.organization.users.map(email => (email != form.user ? email : { ...form }))
				: [...this.organization.users, { ...form }]
			const response = await this.state.organizations.update({ users }, { email: true })
			if (!response) {
				const message = `${this.translate("Failed to invite")} ${form.user} ${this.translate("to")} ${
					this.organization.name
				}`
				this.notice.emit(smoothly.Notice.failed(message))
			} else {
				const message = `${this.translate("Successfully invited")} ${form.user} ${this.translate("to")} ${
					this.organization.name
				}`
				this.notice.emit(smoothly.Notice.succeeded(message))
			}
			this.disabled = false
		}
	}

	render() {
		return (
			<Host>
				<smoothly-form
					ref={e => (this.form = e)}
					looks="grid"
					processing={this.disabled}
					onSmoothlyFormInput={e => this.inputHandler(e)}
					onSmoothlyFormSubmit={e => this.submitHandler(e)}>
					<smoothly-input type="email" name={"user"} value={this.invite?.user}>
						{this.translate("Email")}
					</smoothly-input>
					<userwidgets-edit-button slot="submit" state={this.state} disabled={this.disabled} toggle={false} />
				</smoothly-form>
			</Host>
		)
	}
}
