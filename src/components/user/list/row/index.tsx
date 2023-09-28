import { Component, h, Host, Prop, State } from "@stencil/core"
import { langly } from "langly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../../model"
import * as translation from "./translation"

@Component({
	tag: "userwidgets-user-list-row",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserListRow {
	@Prop() state: model.State
	@Prop() user: userwidgets.User
	@Prop({ mutable: true }) organization?: userwidgets.Organization | null = null
	@State() translate: langly.Translate = translation.create("en")

	componentWillLoad() {
		this.state.locales.listen("language", language => (this.translate = translation.create(language)))
		if (this.organization === null)
			this.state.organizations.listen("current", organization => (this.organization = organization || undefined))
	}

	render() {
		return (
			<Host>
				<smoothly-table-expandable-row>
					<slot name={`${this.user.email}-cell-start`} />
					<smoothly-table-cell>{`${this.user.name.first} ${this.user.name.last}`}</smoothly-table-cell>
					<smoothly-table-cell>{this.user.email}</smoothly-table-cell>
					<slot name={`${this.user.email}-cell-end`} />
					<smoothly-table-cell />
					<userwidgets-user
						slot="detail"
						state={this.state}
						user={this.user}
						organization={this.organization || undefined}>
						<slot name={`${this.user.email}-detail-start`} slot={`${this.user.email}-detail-start`} />
						<slot name={`${this.user.email}-detail-end`} slot={`${this.user.email}-detail-end`} />
					</userwidgets-user>
				</smoothly-table-expandable-row>
			</Host>
		)
	}
}
