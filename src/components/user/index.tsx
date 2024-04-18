import { Component, Element, Event, EventEmitter, Fragment, h, Host, Listen, Prop, State, Watch } from "@stencil/core"
import { langly } from "langly"
import { smoothly } from "smoothly"
import { Controls } from "smoothly/dist/types/components/picker/menu"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../model"
import * as translation from "./translation"

interface Change {
	permissions: string
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
	@Prop({ mutable: true }) organization?: userwidgets.Organization | null = null
	@State() key?: userwidgets.User.Key
	@State() change?: Partial<Change>
	@State() translate: langly.Translate = translation.create("en")
	@State() processing = false
	@Event() notice: EventEmitter<smoothly.Notice>
	private controls?: Controls

	componentWillLoad() {
		this.state.me.listen("key", key => (this.key = key || undefined))
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
		if (this.organization === null)
			this.state.organizations.listen("current", organization => (this.organization = organization || undefined))
	}
	componentDidRender() {
		Array.from(this.element?.children ?? []).map(detail => detail.removeAttribute("hidden"))
	}

	@Listen("smoothlyPickerLoaded")
	pickerLoadedHandler(event: CustomEvent<Controls>) {
		event.stopPropagation()
		this.controls = event.detail
	}
	@Listen("smoothlyConfirm")
	async remove2faHandler(event: CustomEvent<smoothly.Data>) {
		event.stopPropagation()
		if ("2fa" in event.detail) {
			const result = await this.state.users.remove2fa(this.user.email)
			if (!result) {
				const message = `${this.translate("Failed to update user")}: ${this.user.email}`
				this.notice.emit(smoothly.Notice.failed(message))
			} else {
				const message = `${this.translate("Successfully updated user")}: ${this.user.email}`
				this.notice.emit(smoothly.Notice.succeeded(message))
			}
		}
	}
	@Watch("user")
	userChanged() {
		this.editEndHandler()
	}
	editStartHandler(event: CustomEvent) {
		event.stopPropagation()
		this.controls?.remember()
		this.change = { permissions: this.user.permissions }
	}
	editEndHandler(event?: CustomEvent) {
		event?.stopPropagation()
		this.change = undefined
		this.controls?.restore()
	}
	inputHandler(event: CustomEvent<smoothly.Data>) {
		event.stopPropagation()
		if (this.change)
			this.change = (({ permissions }) => ({ permissions }))({ ...this.change, ...event.detail })
	}
	async submitHandler(event: CustomEvent<smoothly.Data>) {
		event.stopPropagation()
		this.inputHandler(event)
		if (!this.processing) {
			this.processing = true
			const user = userwidgets.User.Changeable.type.get(this.change)
			if (!user) {
				const message = `${this.translate("Malformed user")}`
				console.error(this.change, userwidgets.User.Changeable.flaw(this.change))
				this.notice.emit(smoothly.Notice.failed(message))
			} else if (!(await this.state.users.update(this.user.email, user))) {
				const message = `${this.translate("Failed to update user")}: ${this.user.email}`
				this.notice.emit(smoothly.Notice.failed(message))
			} else {
				const message = `${this.translate("Successfully updated user")}: ${this.user.email}`
				this.notice.emit(smoothly.Notice.succeeded(message))
				this.change = undefined
			}
			this.processing = false
		}
	}
	async remove() {
		if (!this.processing && this.organization) {
			this.processing = true
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
			this.processing = false
		}
	}
	render() {
		return (
			<Host class={{ editing: !!this.change }}>
				<slot name={`${this.user.email}-detail-start`} />
				<smoothly-form
					looks="grid"
					processing={this.processing}
					onSmoothlyFormInput={e => this.inputHandler(e)}
					onSmoothlyFormSubmit={e => this.submitHandler(e)}>
					<smoothly-input name={"name"} readonly value={`${this.user.name.first} ${this.user.name.last}`}>
						{this.translate("Name")}
					</smoothly-input>
					<smoothly-input name={"email"} readonly value={this.user.email}>
						{this.translate("Email")}
					</smoothly-input>
					<userwidgets-permission-picker
						name={"permissions"}
						state={this.state}
						user={this.user}
						organization={this.organization || undefined}
						readonly={!this.change}
					/>
					<div slot="submit" class={"buttons"}>
						{!this.key ||
						!userwidgets.User.Permissions.check(
							this.key.permissions,
							this.organization?.id ?? "*",
							"user.edit"
						) ? null : (
							<Fragment>
								<userwidgets-edit-button
									state={this.state}
									disabled={this.processing || this.change?.permissions == this.user.permissions}
									changed={!!this.change}
									onUserwidgetsEditStart={e => {
										this.editStartHandler(e)
									}}
									onUserwidgetsEditEnd={e => this.editEndHandler(e)}
								/>
								{this.user.twoFactor && (
									<smoothly-button-confirm name="2fa" size="flexible" fill="solid" color="tertiary">
										<smoothly-icon name="shield-checkmark-outline" size="small" />
										<smoothly-icon
											name="trash-outline"
											size="small"
											toolTip={this.translate("Disable two factor authentication")}
										/>
									</smoothly-button-confirm>
								)}
							</Fragment>
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
								disabled={this.processing}
								onClick={() => this.remove()}>
								<smoothly-icon name="person-remove-outline" size="small" />
							</smoothly-button>
						)}
					</div>
				</smoothly-form>
				<slot name={`${this.user.email}-detail-end`} />
			</Host>
		)
	}
}
