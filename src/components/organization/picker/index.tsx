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
	@State() organizations?: userwidgets.Organization[]
	@State() organization?: userwidgets.Organization
	@State() translate: langly.Translate = translation.create("en")

	componentWillLoad() {
		this.state.organizations.listen("value", organizations => (this.organizations = organizations || undefined))
		this.state.organizations.listen("current", organization => (this.organization = organization || undefined))
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
	}
	inputHandler(event: CustomEvent<Record<string, unknown>>) {
		event.stopPropagation()
		const organization = this.organizations?.find(organization => organization.id == event.detail.organization)
		if (this.organizations && organization)
			this.state.organizations.current = organization
	}
	render() {
		return (
			<Host>
				{this.organization ? (
					<smoothly-input-select name="organization" looks="border" onSmoothlyInput={e => this.inputHandler(e)}>
						<span slot="label">{this.translate("Organization")}</span>
						<span slot="search">{this.translate("Search")}</span>
						{this.organizations?.map(organization => (
							<smoothly-item selected={organization.id == this.organization?.id} value={organization.id}>
								{organization.name}
							</smoothly-item>
						))}
					</smoothly-input-select>
				) : null}
			</Host>
		)
	}
}
