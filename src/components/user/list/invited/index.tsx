import { Component, h, Prop, State } from "@stencil/core"
import * as langly from "langly"
import { model } from "../../../../model"
import { Options } from "../../../../State/Options"
import * as translation from "./translation"
@Component({
	tag: "userwidgets-user-list-invited",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserListInvited {
	@Prop() state: model.State
	@State() key?: model.userwidgets.User.Key
	@State() organizations?: model.userwidgets.Organization[]
	@State() users?: model.userwidgets.User.Readable[]
	@State() options?: Options
	@State() translate: langly.Translate = translation.create("en")
	private invited: string[]

	componentWillLoad() {
		this.state.me.listen("key", async promise => {
			const key = await promise
			this.key = key ? key : undefined
		})
		this.state.organization.listen("organizations", async promise => {
			const organizations = await promise
			this.organizations = organizations ? organizations : undefined
		})
		this.state.listen("options", options => {
			this.options = options ? options : undefined
		})
		this.state.user.listen("users", async promise => {
			const users = await promise
			this.users = users ? users : undefined
		})
		this.state.listen("language", language => (this.translate = translation.create(language)))
	}
	componentWillRender() {
		this.invited =
			!this.key || !this.organizations || !this.users || !this.options
				? []
				: this.organizations
						.find(organization => organization.id == this.options?.organizationId)
						?.users.filter(email => email != this.key?.email && !this.users?.find(user => user.email == email)) ?? []
	}
	render() {
		return !this.invited.length ? null : (
			<smoothly-table>
				<smoothly-table-row>
					<smoothly-table-header>{this.translate("Pending invites")}</smoothly-table-header>
					<smoothly-table-header></smoothly-table-header>
				</smoothly-table-row>
				{this.invited.map(user => (
					<smoothly-table-row class={"user"}>
						<smoothly-table-cell>{user}</smoothly-table-cell>
						<smoothly-table-cell class={"buttons-cell"}>
							<div class={"inputs"}>
								<userwidgets-organization-user-remove class={"input"}>
									<smoothly-icon name="paper-plane-sharp" size="small"></smoothly-icon>
								</userwidgets-organization-user-remove>
								<userwidgets-organization-user-reinvite class={"input"}>
									<smoothly-icon name="person-remove-sharp" size="small"></smoothly-icon>
								</userwidgets-organization-user-reinvite>
							</div>
						</smoothly-table-cell>
					</smoothly-table-row>
				))}
			</smoothly-table>
		)
	}
}
