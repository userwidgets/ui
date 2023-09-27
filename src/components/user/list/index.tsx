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
	@Prop() organization?: userwidgets.Organization
	@State() users?: userwidgets.User[]
	@State() invited?: Pick<userwidgets.User, "email">[]
	@State() key?: userwidgets.User.Key
	@State() translate: langly.Translate = translation.create("en")
	componentWillLoad() {
		this.state.users.listen(
			"value",
			users =>
				(this.users = (users || undefined)?.filter(user => this.organization?.users.includes(user.email) ?? true))
		)
		this.state.users.listen("invited", invited => (this.invited = invited || undefined))
		this.state.me.listen("key", async key => (this.key = key || undefined))
		this.state.locales.listen("language", language => (this.translate = translation.create(language)))
	}

	render() {
		return (
			<Host>
				<smoothly-table>
					<smoothly-table-row>
						<slot name="header-start" />
						<smoothly-table-header>{this.translate("Name")}</smoothly-table-header>
						<smoothly-table-header>{this.translate("Email")}</smoothly-table-header>
						<smoothly-table-header>{this.translate("Status")}</smoothly-table-header>
						<slot name="header-end" />
						<userwidgets-user-list-invite-cell state={this.state}>
							<slot slot="detail" name="detail" />
						</userwidgets-user-list-invite-cell>
					</smoothly-table-row>
					<slot name="row-start" />
					{this.users?.map(user => (
						<userwidgets-user-list-row key={user.email} state={this.state} user={user} organization={this.organization}>
							<slot name={`${user.email}-cell-start`} slot={`${user.email}-cell-start`} />
							<slot name={`${user.email}-cell-end`} slot={`${user.email}-cell-end`} />
							<slot name={`${user.email}-detail-start`} slot={`${user.email}-detail-start`} />
							<slot name={`${user.email}-detail-end`} slot={`${user.email}-detail-end`} />
						</userwidgets-user-list-row>
					))}
					<slot name="row-end" />
				</smoothly-table>
			</Host>
		)
	}
}
