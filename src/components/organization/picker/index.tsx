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

	componentWillLoad() {
		this.state.me.listen("key", key => (this.key = key || undefined)) //do i need this?
		this.state.organizations.listen("value", organizations => (this.organizations = organizations || undefined)) //do i need this?
		this.state.organizations.listen("current", organization => (this.organization = organization || undefined)) //do i need this?
		this.state.locales.listen("language", language => (this.translate = translation.create(language)))
	}
	// clickHandler() {}
	inputHandler(event: CustomEvent<Record<string, unknown>>) {
		// the input handler should update the active organization
		event.stopPropagation()
		const organization = event.detail.organization
		if (userwidgets.Organization.is(organization))
			this.state.organizations.current = this.organizations?.find(o => o.id == organization.id)
	}
	render() {
		return (
			<Host>
				<smoothly-form>
					<smoothly-picker
						name="organization"
						// onClick={() => this.clickHandler()} // we are probably going to have to do something on click ?
						onSmoothlyInput={e => this.inputHandler(e)}>
						<span slot="search">Search</span>
						{this.organizations?.map(
							(
								organization // i think this is correct
							) => (
								<smoothly-picker-option selected={organization == this.organization} value={organization}>
									{organization.name}
								</smoothly-picker-option>
							)
						)}
					</smoothly-picker>
				</smoothly-form>
			</Host>
		)
	}
}
