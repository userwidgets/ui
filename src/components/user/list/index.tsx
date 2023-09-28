import { Component, h, Host, Prop, State } from "@stencil/core"
import * as langly from "langly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"
import * as translation from "./translation"

@Component({
	tag: "userwidgets-user-list",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserList {
	@Prop() state: model.State
	@State() users?: userwidgets.User[]
	@State() key?: userwidgets.User.Key
	@Prop() organization?: userwidgets.Organization
	@State() translate: langly.Translate = translation.create("en")
	componentWillLoad() {
		this.state.users.listen(
			"value",
			users => (this.users = (users || undefined)?.filter(user => this.organization?.users.includes(user.email)))
		)
		this.state.me.listen("key", async key => (this.key = key || undefined))
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
	}

	render() {
		return (
			<Host>
				<smoothly-summary color="primary" size="small" fill="outline">
					<span slot="summary">{this.translate("Invites")}</span>
					<userwidgets-user-list-invited slot="content" state={this.state} />
				</smoothly-summary>
				<smoothly-table>
					<smoothly-table-row>
						<smoothly-table-header>{this.translate("Members")}</smoothly-table-header>
						<smoothly-table-header>{this.translate("Email")}</smoothly-table-header>
						<smoothly-table-header></smoothly-table-header>
					</smoothly-table-row>
					{this.users?.map(user => (
						<smoothly-table-expandable-row>
							<smoothly-table-cell>{user.name.first + " " + user.name.last}</smoothly-table-cell>
							<smoothly-table-cell>{user.email}</smoothly-table-cell>
							<smoothly-table-cell></smoothly-table-cell>
							<userwidgets-user slot="detail" user={user} state={this.state} organization={this.organization} />
						</smoothly-table-expandable-row>
					))}
				</smoothly-table>
			</Host>
		)
	}
}
