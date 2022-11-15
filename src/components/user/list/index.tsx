import { Component, h, Prop, State } from "@stencil/core"
import { model } from "../../../model"
import { Me } from "../../../State"
import { Listenable } from "../../../State/Listenable"
import { Options } from "../../../State/Options"
import { User } from "../../../State/User"

interface StateInterface {
	user: User & Listenable<User>
	options: Options
	me: Me & Listenable<Me>
}

export type StateType = StateInterface & Listenable<StateInterface>

@Component({
	tag: "userwidgets-user-list",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserList {
	@Prop() state: StateType
	@State() users?: model.userwidgets.User.Readable[]

	componentWillLoad() {
		this.state.user.listen("users", async promise => {
			const users = await promise
			this.users = users ? users : undefined
		})
	}
	render() {
		return (
			<smoothly-table>
				<smoothly-table-row>
					<smoothly-table-header>Name</smoothly-table-header>
					<smoothly-table-header>Email</smoothly-table-header>
				</smoothly-table-row>
				{this.users?.map(user => (
					<smoothly-table-expandable-row>
						<smoothly-table-cell>{[user.name.first, user.name.last].join(" ")}</smoothly-table-cell>
						<smoothly-table-cell>{user.email}</smoothly-table-cell>
						<div class={"detail"} slot="detail">
							<slot name={user.email}></slot>
							<div class={"table"}>
								<userwidgets-user-status></userwidgets-user-status>
								<userwidgets-user-permissions-update></userwidgets-user-permissions-update>
								<userwidgets-user-delete></userwidgets-user-delete>
							</div>
						</div>
					</smoothly-table-expandable-row>
				))}
			</smoothly-table>
		)
	}
}
