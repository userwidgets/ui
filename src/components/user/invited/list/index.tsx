import { Component, Event, EventEmitter, h, Host, Prop, State } from "@stencil/core"
import { langly } from "langly"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../../model"
import * as translation from "../translation"

@Component({
	tag: "userwidgets-user-invited-list",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserInvitedList {
	@Prop() state: model.State
	@State() invited?: Pick<userwidgets.User, "email">[]
	@State() disabled = false
	@State() translate: langly.Translate = translation.create("en")
	@Event() notice: EventEmitter<smoothly.Notice>

	componentWillLoad() {
		this.state.users.listen("invited", users => (this.invited = users || undefined))
		this.state.locales.listen("language", language => (this.translate = translation.create(language)))
	}

	render() {
		return (
			<Host>
				<smoothly-table>
					<smoothly-table-row>
						<slot name="header-start" />
						<smoothly-table-header>{this.translate("Email")}</smoothly-table-header>
						<slot name="header-end" />
						<userwidgets-user-list-invite-cell state={this.state} />
					</smoothly-table-row>
					<slot name="row-start" />
					{this.invited?.map(user => (
						<userwidgets-user-invited-list-row key={user.email} state={this.state} user={user}>
							<slot name={`${user.email}-cell-start`} slot={`${user.email}-cell-start`} />
							<slot name={`${user.email}-cell-end`} slot={`${user.email}-cell-end`} />
							<slot name={`${user.email}-detail-start`} slot={`${user.email}-detail-start`} />
							<slot name={`${user.email}-detail-end`} slot={`${user.email}-detail-end`} />
						</userwidgets-user-invited-list-row>
					))}
					<slot name="row-end" />
				</smoothly-table>
			</Host>
		)
	}
}
