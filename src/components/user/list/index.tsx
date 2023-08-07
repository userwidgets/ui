import { Component, h, Prop, State } from "@stencil/core"
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
				{this.users?.map(user => (
					<userwidgets-user user={user} state={this.state} />
				))}
			</smoothly-table>
		)
	}
}
