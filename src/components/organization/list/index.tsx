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
	@State() editing = false
	componentWillLoad() {
		this.state.me.listen("key", async key => (this.key = key || undefined))
		this.state.organizations.listen("value", organizations => (this.organizations = organizations || undefined))
	}

	// handle the submit event
	async submitHandler(event: CustomEvent<model.Data>, organization: userwidgets.Organization) {
		event.preventDefault()
		event.stopPropagation()
		//console.log("submitHandler", event.detail.name, organization)
		const newName = {
			name: event.detail.name,
		}
		userwidgets.Organization.Changeable.type.is(newName) &&
			(await this.state.organizations.update(organization.id, newName)) &&
			console.log("i think this worked")
	}
	render() {
		return (
			<smoothly-table>
				<smoothly-table-row>
					<smoothly-table-header>Name</smoothly-table-header>
					<smoothly-table-header>Modified</smoothly-table-header>
				</smoothly-table-row>
				{this.organizations?.map(organization => (
					<smoothly-table-expandable-row>
						<smoothly-table-cell>{organization.name}</smoothly-table-cell>
						<smoothly-table-cell>{organization.modified}</smoothly-table-cell>
						<div class={"detail"} slot="detail">
							<smoothly-form
								looks={"grid"}
								onSmoothlyFormSubmit={e =>
									this.submitHandler(e, organization)
								} /* consider showing the id, created, and modified if user is superAdmin(?)*/
							>
								<smoothly-input
									disabled={false}
									name="name" /* the organization name should be editable, its going to require api calls that elias created. */
								>
									{organization.name}
								</smoothly-input>
								{/* <smoothly-input disabled={true} name="id">
									{organization.id}
								</smoothly-input> */}
								<smoothly-submit slot="submit">Update Organization name</smoothly-submit>
							</smoothly-form>

							<smoothly-table /* Members should be its own component (userwidgets-user-list) 
							that can be used both here and on its own. Make it toggle between showing and not showing.
							look into how issuefab does the toggle to show some of the nested tables in detail-slot*/
							>
								<smoothly-table-row>
									<smoothly-table-header>Members</smoothly-table-header>
								</smoothly-table-row>
								{organization.users.map(user => (
									<smoothly-table-row>{user}</smoothly-table-row>
								))}
							</smoothly-table>
						</div>
					</smoothly-table-expandable-row>
					// We are going to want to include a component to view and edit an organizations permissions
				))}
			</smoothly-table>
		)
	}
}
