import { Component, h, Prop, State } from "@stencil/core"
import * as langly from "langly"
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
	@State() users?: userwidgets.User.Readable[]
	@State() translate: langly.Translate = translation.create("en")
	private invited: string[]

	componentWillLoad() {
		this.state.me.listen("key", key => (this.key = key || undefined))
		this.state.organizations.listen("current", organization => (this.organization = organization || undefined))
		this.state.organizations.listen("value", organizations => (this.organizations = organizations || undefined))
		this.state.users.listen("value", users => (this.users = users || undefined))
		this.state.locales.listen("language", language => (this.translate = translation.create(language)))
	}
	componentWillRender() {
		this.invited =
			!this.key || !this.organizations || !this.users
				? []
				: this.organizations
						.find(organization => organization.id == this.organization?.id)
						?.users.filter(email => email != this.key?.email && !this.users?.find(user => user.email == email)) ?? []
	}
	reInvite(user: string) {
		const users = this.organization?.users.map(e => (e == user ? { user: user } : e))
		if (this.organization)
			this.state.organizations.update(this.organization.id, { users: users })
	}
	removeUser(user: string) {
		const users = this.organization?.users.filter(e => e != user)
		if (this.organization) {
			this.state.organizations.update(this.organization.id, { users: users })
		}
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
								<smoothly-button onClick={() => this.reInvite(user)} size="flexible" class={"input"}>
									<smoothly-icon name="paper-plane-sharp" size="tiny"></smoothly-icon>
								</smoothly-button>
								<smoothly-button onClick={() => this.removeUser(user)} size="flexible" class={"input"}>
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
