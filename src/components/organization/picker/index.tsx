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
	@State() key?: userwidgets.User.Key
	@State() organizations?: userwidgets.Organization[]
	@State() organization?: userwidgets.Organization
	@State() translate: langly.Translate = translation.create("en")
	private listen = false

	componentWillLoad() {
		this.listen = false
		this.state.me.listen("key", key => (this.key = key || undefined))
		this.state.organizations.listen("value", organizations => (this.organizations = organizations || undefined))
		this.state.organizations.listen("current", organization => (this.organization = organization || undefined))
		this.state.locales.listen("language", language => (this.translate = translation.create(language)))
	}
	clickHandler() {
		this.listen = true
	}
	inputHandler(event: CustomEvent<Record<string, unknown>>) {
		event.stopPropagation()
		const organization = event.detail.organization
		if (this.listen && userwidgets.Organization.is(organization)) {
			this.state.organizations.current = organization
		}
	}
	render() {
		return (
			<Host>
				<smoothly-form>
					<smoothly-picker
						name="organization"
						onClick={() => this.clickHandler()}
						onSmoothlyInput={e => this.inputHandler(e)}>
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
