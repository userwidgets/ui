import { Component, h, Prop, State } from "@stencil/core"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../../model"

@Component({
	tag: "userwidgets-user-list-organization",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserListOrganization {
	@Prop() state: model.State
	@State() organization?: userwidgets.Organization
	componentWillLoad() {
		this.state.organizations.listen("current", organization => (this.organization = organization || undefined))
	}
	render() {
		return <userwidgets-user-list state={this.state} organization={this.organization} />
	}
}
