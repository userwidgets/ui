import { Component, ComponentWillLoad, h, Prop, State } from "@stencil/core"
import * as langly from "langly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"
import * as translation from "./translation"
@Component({
	tag: "userwidgets-user-status",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserStatus implements ComponentWillLoad {
	@Prop() state: model.State
	@Prop() user: userwidgets.User
	@State() organizations?: userwidgets.Organization[]
	@State() organization?: userwidgets.Organization
	@State() translate: langly.Translate = translation.create("en")
	componentWillLoad(): void | Promise<void> {
		this.state.organizations.listen("value", organizations => (this.organizations = organizations || undefined))
		this.state.organizations.listen("current", organization => (this.organization = organization || undefined))
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
	}

	render() {
		return [
			<span>{this.translate("Status:")}</span>,
			this.organizations
				?.find(organization => organization.id == this.organization?.id)
				?.users.includes(this.user.email) ? (
				<span>{this.translate("Active")}</span>
			) : (
				<span>{this.translate("Inactive")}</span>
			),
		]
	}
}
