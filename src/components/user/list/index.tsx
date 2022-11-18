import { Component, h, Prop, State } from "@stencil/core"
import { model } from "../../../model"

@Component({
	tag: "userwidgets-user-list",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserList {
	@Prop() state: model.State
	@State() users?: model.userwidgets.User.Readable[]
	@State() key?: model.userwidgets.User.Key

	componentWillLoad() {
		this.state.user.listen("users", async promise => {
			const users = await promise
			this.users = !users ? undefined : users
		})
		this.state.me.listen("key", async promise => {
			const key = await promise
			this.key = !key ? undefined : key
		})
	}
	render() {
		return (
			<smoothly-table>
				<smoothly-table-row>
					<smoothly-table-header>Name</smoothly-table-header>
					<smoothly-table-header>Email</smoothly-table-header>
					<smoothly-table-header></smoothly-table-header>
				</smoothly-table-row>
				{this.users?.map(user =>
					user.email == this.key?.email ? null : (
						<smoothly-table-expandable-row>
							<smoothly-table-cell>{[user.name.first, user.name.last].join(" ")}</smoothly-table-cell>
							<smoothly-table-cell>{user.email}</smoothly-table-cell>
							<div class={"detail"} slot="detail">
								<slot name={user.email}></slot>
								<div class={"table"}>
									<userwidgets-user-status state={this.state} user={user}></userwidgets-user-status>
									<userwidgets-user-permissions-update
										state={this.state}
										user={user}></userwidgets-user-permissions-update>
									<userwidgets-organization-user-remove
										state={this.state}
										user={user}
										class={"right"}></userwidgets-organization-user-remove>
								</div>
							</div>
						</smoothly-table-expandable-row>
					)
				)}
			</smoothly-table>
		)
	}
}
