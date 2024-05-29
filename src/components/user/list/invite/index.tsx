import { Component, ComponentWillLoad, Event, EventEmitter, h, Host, Prop, State, VNode } from "@stencil/core"
import { langly } from "langly"
import { smoothly } from "smoothly"
import { SmoothlyFormCustomEvent } from "smoothly/dist/types/components"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../../model"
import * as translation from "./translation"

// TODO update to use new forms
@Component({
	tag: "userwidgets-user-list-invite",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserListInvite implements ComponentWillLoad {
	private form?: HTMLSmoothlyFormElement
	@Prop() state: model.State
	@Prop({ mutable: true }) organization?: userwidgets.Organization | null = null
	@State() invite?: Partial<userwidgets.Organization.Changeable.Invite> = {}
	@State() translate: langly.Translate = translation.create("en")
	@Event() userwidgetsFormControls: EventEmitter<{ clear: () => void }>
	@Event() notice: EventEmitter<smoothly.Notice>

	componentWillLoad(): void {
		this.userwidgetsFormControls.emit({ clear: () => this.form?.clear() })
		if (this.organization === null)
			this.state.organizations.listen("current", organization => (this.organization = organization || undefined))
	}

	async submitHandler(event: SmoothlyFormCustomEvent<smoothly.Submit>): Promise<void> {
		event.stopPropagation()
		if (!this.organization) {
			const message = `${this.translate("No organization selected")}`
			this.notice.emit(smoothly.Notice.failed(message))
		} else if (!userwidgets.Organization.Changeable.Invite.is(event.detail.value)) {
			const message = `${this.translate("Invalid form")}`
			this.notice.emit(smoothly.Notice.failed(message))
		} else {
			const invite = event.detail.value
			const users = this.organization.users.includes(event.detail.value.user)
				? this.organization.users.map(email => (email != invite.user ? email : { ...invite }))
				: [...this.organization.users, { ...invite }]
			const response = await this.state.organizations.update({ users }, { email: true })
			if (!response) {
				const message = `${this.translate("Failed to invite")} ${invite.user} ${this.translate("to")} ${
					this.organization.name
				}`
				this.notice.emit(smoothly.Notice.failed(message))
			} else {
				const message = `${this.translate("Successfully invited")} ${invite.user} ${this.translate("to")} ${
					this.organization.name
				}`
				this.notice.emit(smoothly.Notice.succeeded(message))
				event.detail.result(true)
			}
		}
		event.detail.result(false)
	}

	render(): VNode | VNode[] {
		return (
			<Host>
				<smoothly-form
					ref={e => (this.form = e)}
					looks={"grid"}
					type={"create"}
					onSmoothlyFormSubmit={e => this.submitHandler(e)}>
					<smoothly-input type="email" name={"user"} value={this.invite?.user}>
						{this.translate("Email")}
					</smoothly-input>
					<smoothly-input-submit slot={"submit"} size={"icon"} color={"success"} fill={"default"} />
				</smoothly-form>
			</Host>
		)
	}
}
