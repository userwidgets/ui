import { Component, ComponentWillLoad, h, Prop, State } from "@stencil/core"
import * as langly from "langly"
import { model } from "../../../model"
import * as translation from "./translation"
@Component({
	tag: "userwidgets-user-status",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserStatus implements ComponentWillLoad {
	@Prop() state: model.State
	@Prop() user: model.userwidgets.User.Readable
	@State() organizations?: model.userwidgets.Organization[]
	@State() organizationId?: string
	@State() translate: langly.Translate = translation.create("en")
	componentWillLoad(): void | Promise<void> {
		this.state.organization.listen("organizations", async promise => {
			const organizations = await promise
			this.organizations = !organizations ? undefined : organizations
		})
		this.state.listen("options", options => (this.organizationId = options.organizationId))
		this.state.listen("language", language => (this.translate = translation.create(language)))
	}

	render() {
		return [
			<span>{this.translate("Status:")}</span>,
			this.organizations
				?.find(organization => organization.id == this.organizationId)
				?.users.includes(this.user.email) ? (
				<span>{this.translate("Active")}</span>
			) : (
				<span>{this.translate("Inactive")}</span>
			),
		]
	}
}
