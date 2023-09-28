import { Component, Element, Event, EventEmitter, h, Host, Prop, State, Watch } from "@stencil/core"
import { langly } from "langly"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../model"
import * as translation from "./translation"

interface Change {
	permissions: userwidgets.User.Permissions
}
@Component({
	tag: "userwidgets-user",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUser {
	@Element() element: HTMLElement
	@Prop() state: model.State
	@Prop() user: userwidgets.User
	@Prop({ mutable: true }) organization?: userwidgets.Organization
	@State() key?: userwidgets.User.Key
	@State() change?: Partial<Change>
	@State() translate: langly.Translate = translation.create("en")
	@State() disabled = false
	@Event() notice: EventEmitter<smoothly.Notice>

	componentWillLoad() {
		this.state.me.listen("key", key => (this.key = key || undefined))
		this.state.locales.listen("language", language => (this.translate = translation.create(language)))
		if (!this.organization)
			this.state.organizations.listen("current", organization => (this.organization = organization || undefined))
	}
	componentDidRender() {
		Array.from(this.element?.children ?? []).map(detail => detail.removeAttribute("hidden"))
	}
	@Watch("user")
	userChanged() {
		this.editEndHandler()
	}
	editStartHandler(event: CustomEvent) {
		event.stopPropagation()
		this.change = {}
	}
	editEndHandler(event?: CustomEvent) {
		event?.stopPropagation()
		this.change = undefined
	}
	inputHandler(event: CustomEvent<smoothly.Data>) {
		event.stopPropagation()
		if (this.change)
			this.change = {}
	}
	submitHandler(event: CustomEvent<smoothly.Data>) {
		event.stopPropagation()
		this.inputHandler(event)
	}
	async remove() {
		if (!this.disabled && this.organization) {
			this.disabled = true
			const users = this.organization.users.filter(email => email != this.user.email)
			const response = await this.state.organizations.update({ users }, { id: this.organization.id })
			if (!response) {
				const message = `${this.translate("Failed to remove")} ${this.user.email} ${this.translate("from")} ${
					this.organization.name
				}`
				this.notice.emit(smoothly.Notice.failed(message))
			} else {
				const message = `${this.translate("Successfully removed")} ${this.user.email} ${this.translate("from")} ${
					this.organization.name
				}`
				this.notice.emit(smoothly.Notice.succeeded(message))
			}
			this.disabled = false
		}
	}
	render() {
		return (
			<Host class={{ editing: !!this.change }}>
				<slot name={`${this.user.email}-detail-start`} />
				<smoothly-form
					looks="grid"
					onSmoothlyFormInput={e => this.inputHandler(e)}
					onSmoothlyFormSubmit={e => this.submitHandler(e)}>
					<smoothly-input name={"name"} readonly value={`${this.user.name.first} ${this.user.name.last}`}>
						{this.translate("Name")}
					</smoothly-input>
					<smoothly-input name={"email"} readonly value={this.user.email}>
						{this.translate("Email")}
					</smoothly-input>
					<div slot="submit" class={"buttons"}>
						{!this.key ||
						!userwidgets.User.Permissions.check(
							this.key.permissions,
							this.organization?.id ?? "*",
							"user.edit"
						) ? null : (
							<userwidgets-edit-button
								state={this.state}
								disabled={true}
								changed={!!this.change}
								onUserwidgetsEditStart={e => {
									this.editStartHandler(e)
								}}
								onUserwidgetsEditEnd={e => this.editEndHandler(e)}
							/>
						)}
						{!this.key ||
						!userwidgets.User.Permissions.check(
							this.key.permissions,
							this.organization?.id ?? "*",
							"org.edit"
						) ? null : (
							<smoothly-button
								slot="submit"
								class="button"
								size="flexible"
								color="danger"
								type="button"
								onClick={() => this.remove()}>
								<smoothly-icon name="person-remove-outline" size="small"></smoothly-icon>
							</smoothly-button>
						)}
					</div>
				</smoothly-form>
				<slot name={`${this.user.email}-detail-end`} />
			</Host>
		)
	}
}
