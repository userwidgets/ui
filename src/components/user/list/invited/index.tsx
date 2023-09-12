import { Component, Event, EventEmitter, h, Prop, State, Watch } from "@stencil/core"
import * as langly from "langly"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../../model"
import * as translation from "./translation"
@Component({
	tag: "userwidgets-user-list-invited",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserListInvited {
	@Prop() state: model.State
	@State() key?: userwidgets.User.Key
	@State() organization?: userwidgets.Organization
	@State() organizations?: userwidgets.Organization[]
	@State() users?: userwidgets.User[]
	@State() disabled = false
	@State() translate: langly.Translate = translation.create("en")
	@State() invited: string[]
	@Event() notice: EventEmitter<smoothly.Notice>

	componentWillLoad() {
		this.state.me.listen("key", key => (this.key = key || undefined))
		this.state.organizations.listen("current", organization => (this.organization = organization || undefined))
		this.state.organizations.listen("value", organizations => (this.organizations = organizations || undefined))
		this.state.users.listen("value", users => (this.users = users || undefined))
		this.state.locales.listen("language", language => (this.translate = translation.create(language)))
		this.inviteFilter()
	}
	@Watch("organizations")
	@Watch("key")
	@Watch("users")
	inviteFilter() {
		this.invited =
			!this.key || !this.organizations || !this.users
				? []
				: this.organizations
						.find(organization => organization.id == this.organization?.id)
						?.users.filter(email => email != this.key?.email && !this.users?.find(user => user.email == email)) ?? []
	}
	async reInvite(user: string) {
		this.disabled = true
		if (this.organization) {
			const users = this.organization?.users.map(e => (e == user ? { user: user } : e))
			const response = await this.state.organizations.update(this.organization.id, { users: users })
			if (response)
				this.notice.emit(smoothly.Notice.succeeded("Reinvite successfully sent."))
			else
				this.notice.emit(smoothly.Notice.failed("Failed to send out reinvitation."))
		}
		this.disabled = false
	}
	async removeUser(user: string) {
		this.disabled = true
		if (this.organization) {
			const users = this.organization.users.filter(e => e != user)
			const response = await this.state.organizations.update(this.organization.id, { users: users })
			if (response)
				this.notice.emit(smoothly.Notice.succeeded("User successfully removed from organization."))
			else
				this.notice.emit(smoothly.Notice.failed("Failed to remove user from organization."))
		}
		this.disabled = false
	}

	render() {
		return !this.invited.length ? null : (
			<smoothly-table>
				<smoothly-table-row>
					<smoothly-table-header>{this.translate("Pending invites")}</smoothly-table-header>
					<smoothly-table-header></smoothly-table-header>
				</smoothly-table-row>
				{this.invited.map(user => (
					<smoothly-table-row class={"user"}>
						<smoothly-table-cell>{user}</smoothly-table-cell>
						<smoothly-table-cell class={"buttons-cell"}>
							<div class={"inputs"}>
								<smoothly-button
									disabled={this.disabled}
									onClick={() => this.reInvite(user)}
									size="flexible"
									class={"input"}>
									<smoothly-icon name="paper-plane-sharp" size="tiny"></smoothly-icon>
								</smoothly-button>
								<smoothly-button
									disabled={this.disabled}
									onClick={() => this.removeUser(user)}
									size="flexible"
									class={"input"}>
									<smoothly-icon name="person-remove-sharp" size="tiny"></smoothly-icon>
								</smoothly-button>
							</div>
						</smoothly-table-cell>
					</smoothly-table-row>
				))}
			</smoothly-table>
		)
	}
}
