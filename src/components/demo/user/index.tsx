import { Component, Fragment, h, Host, Prop, State } from "@stencil/core"
import { langly } from "langly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"
import * as translation from "./translation"

@Component({
	tag: "userwidgets-demo-user",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsDemoUser {
	@Prop() state: model.State
	@State() users?: userwidgets.User[]
	@State() invited?: Pick<userwidgets.User, "email">[]
	@State() translate: langly.Translate = translation.create("en")

	componentWillLoad() {
		this.state.users.listen("value", users => (this.users = users || undefined))
		this.state.users.listen("invited", invited => (this.invited = invited || undefined))
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
	}

	render() {
		return (
			<Host>
				<userwidgets-user-list state={this.state}>
					<smoothly-table-header slot="header-end">{this.translate("Age")}</smoothly-table-header>
					{this.users?.map((user, index) => (
						<Fragment>
							<smoothly-table-cell slot={`${user.email}-cell-end`}>{20 + index}</smoothly-table-cell>
							<div slot={`${user.email}-detail-end`}>
								{`${this.translate("This users age is")}:`} {20 + index}
							</div>
						</Fragment>
					))}
				</userwidgets-user-list>
				<userwidgets-user-invited-list state={this.state}>
					<smoothly-table-header slot="header-start">{this.translate("Fake name")}</smoothly-table-header>
					{this.invited?.map(user => (
						<Fragment>
							<smoothly-table-cell slot={`${user.email}-cell-start`}>{user.email.split("@").at(0)}</smoothly-table-cell>
						</Fragment>
					))}
				</userwidgets-user-invited-list>
			</Host>
		)
	}
}
