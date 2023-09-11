import { Component, h, Host, Prop, State } from "@stencil/core"
import * as langly from "langly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"
import * as translation from "./translation"
@Component({
	tag: "userwidgets-organization-picker",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsOrganizationPicker {
	@Prop() state: model.State
	@Prop() looks: "plain" | "grid" | "border" | "line" = "border" // same as smoothly form
	@State() organizations?: userwidgets.Organization[]
	@State() organization?: userwidgets.Organization
	@State() translate: langly.Translate = translation.create("en")

	componentWillLoad() {
		this.state.organizations.listen("value", organizations => (this.organizations = organizations || undefined))
		this.state.organizations.listen("current", organization => (this.organization = organization || undefined))
		this.state.locales.listen("language", language => (this.translate = translation.create(language)))
	}
	inputHandler(event: CustomEvent<Record<string, unknown>>) {
		event.stopPropagation()
		const organization = event.detail.organization
		if (userwidgets.Organization.is(organization))
			this.state.organizations.current = this.organizations?.find(o => o.id == organization.id)
	}
	render() {
		return (
			<Host>
				<smoothly-form looks={this.looks}>
					<smoothly-picker name="organization" onSmoothlyInput={e => this.inputHandler(e)}>
						<span slot="search">Search</span>
						{this.organizations?.map(organization => (
							<smoothly-picker-option selected={organization == this.organization} value={organization}>
								{organization.name}
							</smoothly-picker-option>
						))}
					</smoothly-picker>
				</smoothly-form>
			</Host>
		)
	}
}
