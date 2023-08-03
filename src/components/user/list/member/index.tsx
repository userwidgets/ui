import { Component, h, Prop, State } from "@stencil/core"
import * as langly from "langly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../../model"
import * as translation from "./translation"

@Component({
	tag: "userwidgets-user-list-member",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserListMember {
	// If its given an organization then it lists the members and invites of that organization.
	// Otherwise it shows the organization the user is currently logged on to.
	// allows editing of users, resending invites, and removing users. (pending the permissions ofc)
	@Prop() state: model.State
	@State() users?: userwidgets.User.Readable[]
	@State() key?: userwidgets.User.Key
	@Prop({ mutable: true }) organization?: userwidgets.Organization
	@State() translate: langly.Translate = translation.create("en")
	componentWillLoad() {
		this.state.users.listen("value", users => (this.users = users || undefined))
		this.state.me.listen("key", async key => (this.key = key || undefined))
		this.state.locales.listen("language", language => (this.translate = translation.create(language)))
		this.organization ??
			this.state.organizations.listen("current", organization => (this.organization = organization || undefined))
	}
	render() {
		return (
			<smoothly-table>
				<smoothly-table-row>
					<smoothly-table-header>{this.translate("Name")}</smoothly-table-header>
					<smoothly-table-header>{this.translate("Email")}</smoothly-table-header>
					<smoothly-table-header></smoothly-table-header>
				</smoothly-table-row>
				{this.key?.permissions[this.organization?.id ?? ""]?.organization?.write
					? this.users?.map(user =>
							user.email == this.key?.email ? null : (
								<smoothly-table-expandable-row>
									<smoothly-table-cell>{[user.name.first, user.name.last].join(" ")}</smoothly-table-cell>
									<smoothly-table-cell>{user.email}</smoothly-table-cell>
									<div class={"detail"} slot="detail">
										<slot name={user.email}></slot>
										<div class={"userwidgets-detail"}>
											<userwidgets-user-permissions-update state={this.state} user={user}>
												<smoothly-icon name="paper-plane-sharp" size="tiny"></smoothly-icon>
											</userwidgets-user-permissions-update>
											<userwidgets-organization-user-remove state={this.state} user={user} class={"right"}>
												<smoothly-icon name="person-remove-sharp" size="tiny"></smoothly-icon>
											</userwidgets-organization-user-remove>
										</div>
									</div>
								</smoothly-table-expandable-row>
							)
					  )
					: this.users?.map(user =>
							user.email == this.key?.email ? null : (
								<smoothly-table-row>
									<smoothly-table-cell>{[user.name.first, user.name.last].join(" ")}</smoothly-table-cell>
									<smoothly-table-cell>{user.email}</smoothly-table-cell>
								</smoothly-table-row>
							)
					  )}
			</smoothly-table>
		)
	}
}
