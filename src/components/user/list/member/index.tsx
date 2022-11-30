import { Component, h, Prop, State } from "@stencil/core"
import * as langly from "langly"
import { model } from "../../../../model"
import { Options } from "../../../../State/Options"
import * as translation from "./translation"

@Component({
	tag: "userwidgets-user-list-member",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserListMember {
	@Prop() state: model.State
	@State() users?: model.userwidgets.User.Readable[]
	@State() key?: model.userwidgets.User.Key
	@State() options?: Options
	@State() translate: langly.Translate
	componentWillLoad() {
		this.state.user.listen("users", async promise => {
			const users = await promise
			this.users = !users ? undefined : users
		})
		this.state.me.listen("key", async promise => {
			const key = await promise
			this.key = !key ? undefined : key
		})
		this.state.listen("options", options => (this.options = options))
		this.state.listen("language", language => (this.translate = translation.create(language)))
	}
	render() {
		return (
			<smoothly-table>
				<smoothly-table-row>
					<smoothly-table-header>{this.translate("Name")}</smoothly-table-header>
					<smoothly-table-header>{this.translate("Email")}</smoothly-table-header>
					<smoothly-table-header></smoothly-table-header>
				</smoothly-table-row>
				{this.key?.permissions[this.options?.organizationId ?? ""]?.organization?.write
					? this.users?.map(user =>
							user.email == this.key?.email ? null : (
								<smoothly-table-expandable-row>
									<smoothly-table-cell>{[user.name.first, user.name.last].join(" ")}</smoothly-table-cell>
									<smoothly-table-cell>{user.email}</smoothly-table-cell>
									<div class={"detail"} slot="detail">
										<slot name={user.email}></slot>
										<div class={"userwidgets-detail"}>
											<userwidgets-user-permissions-update state={this.state} user={user}>
												<smoothly-icon name="paper-plane-sharp" size="small"></smoothly-icon>
											</userwidgets-user-permissions-update>
											<userwidgets-organization-user-remove state={this.state} user={user} class={"right"}>
												<smoothly-icon name="person-remove-sharp" size="small"></smoothly-icon>
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
