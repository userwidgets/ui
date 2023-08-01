import { Component, h, Prop, State } from "@stencil/core"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"

@Component({
	tag: "userwidgets-organization-list",
	styleUrl: "style.css",
	scoped: true,
})
export class userwidgetsOrganizationList {
	@Prop() state: model.State
	@State() organizations?: userwidgets.Organization[]
	@State() key?: userwidgets.User.Key
	componentWillLoad() {
		this.state.me.listen("key", async key => (this.key = key || undefined))
		this.state.organizations.listen("value", organizations => (this.organizations = organizations || undefined))
	}

	render() {
		return (
			<smoothly-table>
				<smoothly-table-row>
					<smoothly-table-header>Name</smoothly-table-header>
					<smoothly-table-header>id</smoothly-table-header>
				</smoothly-table-row>
				{this.organizations?.map(organization => (
					<smoothly-table-expandable-row>
						<smoothly-table-cell>{organization.name}</smoothly-table-cell>
						<smoothly-table-cell>{organization.id}</smoothly-table-cell>
					</smoothly-table-expandable-row>
				))}
			</smoothly-table>
		)
	}
}
