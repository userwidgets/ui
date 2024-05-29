import {
	Component,
	ComponentWillLoad,
	Element,
	Event,
	EventEmitter,
	Fragment,
	h,
	Host,
	Prop,
	State,
	VNode,
} from "@stencil/core"
import { langly } from "langly"
import { smoothly } from "smoothly"
import { SmoothlyFormCustomEvent } from "smoothly/dist/types/components"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../model"
import * as translation from "./translation"

@Component({
	tag: "userwidgets-user",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUser implements ComponentWillLoad {
	@Element() element: HTMLElement
	@Prop() state: model.State
	@Prop() user: userwidgets.User
	@Prop({ mutable: true }) organization?: userwidgets.Organization | null = null
	@State() key?: userwidgets.User.Key
	@State() translate: langly.Translate = translation.create("en")
	@State() processing = false
	@Event() notice: EventEmitter<smoothly.Notice>

	componentWillLoad(): void {
		this.state.me.listen("key", key => (this.key = key || undefined))
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
		if (this.organization === null)
			this.state.organizations.listen("current", organization => (this.organization = organization || undefined))
	}
	async remove2faHandler(event: CustomEvent<smoothly.Data>): Promise<void> {
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
	async submitHandler(event: SmoothlyFormCustomEvent<smoothly.Submit>): Promise<void> {
		event.stopPropagation()
		if (!this.processing) {
			this.processing = true
			await (event.detail.type == "remove" ? this.remove() : this.update(event.detail.value))
			this.processing = false
			event.detail.result(true)
		}
		event.detail.result(false)
	}
	async update(data: smoothly.Data): Promise<void> {
		const change = (({ permissions }) => ({ permissions }))(data)
		const user = userwidgets.User.Changeable.type.get(change)
		if (!user) {
			const message = `${this.translate("Malformed user")}`
			console.error(change, userwidgets.User.Changeable.flaw(change))
			this.notice.emit(smoothly.Notice.failed(message))
		} else if (!(await this.state.users.update(this.user.email, user))) {
			const message = `${this.translate("Failed to update user")}: ${this.user.email}`
			this.notice.emit(smoothly.Notice.failed(message))
		} else {
			const message = `${this.translate("Successfully updated user")}: ${this.user.email}`
			this.notice.emit(smoothly.Notice.succeeded(message))
		}
	}
	async remove(): Promise<void> {
		if (this.organization) {
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
		}
	}
	render(): VNode | VNode[] {
		return (
			<Host>
				<slot name={`${this.user.email}-detail-start`} />
				<smoothly-form looks={"grid"} type={"update"} readonly onSmoothlyFormSubmit={e => this.submitHandler(e)}>
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
					/>
					<div slot="submit" class={"buttons"}>
						{!this.key ||
						!userwidgets.User.Permissions.check(
							this.key.permissions,
							this.organization?.id ?? "*",
							"user.edit"
						) ? null : (
							<Fragment>
								<smoothly-input-edit type={"button"} size={"icon"} color={"primary"} fill={"default"} />
								<smoothly-input-reset type={"form"} size={"icon"} color={"warning"} fill={"default"} />
								<smoothly-input-submit size={"icon"} color={"danger"} fill={"default"} delete />
								<smoothly-input-submit size={"icon"} color={"success"} fill={"default"} />
								{this.user.twoFactor && (
									<smoothly-button-confirm
										name="2fa"
										size="flexible"
										fill="solid"
										color="tertiary"
										onSmoothlyConfirm={e => this.remove2faHandler(e)}>
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
					</div>
				</smoothly-form>
				<slot name={`${this.user.email}-detail-end`} />
			</Host>
		)
	}
}
