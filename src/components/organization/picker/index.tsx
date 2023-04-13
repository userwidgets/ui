import { Component, h, Prop, State } from "@stencil/core"
import * as langly from "langly"
import { Option } from "smoothly"
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
		this.state.me.listen("key", key => (this.key = key || undefined))
		this.state.organizations.listen("value", organizations => (this.organizations = organizations || undefined))
		this.state.organizations.listen("current", organization => (this.organization = organization || undefined))
		this.state.locales.listen("language", language => (this.translate = translation.create(language)))
	}

	menuCloseHandler(event: CustomEvent<Option[]>) {
		event.stopPropagation()
		const id: string | undefined = event.detail.at(0)?.value
		const found = this.organizations?.find(organization => organization.id == id)
		if (found)
			this.state.organizations.current = found
	}
	render() {
		const options = this.organizations?.map(organization => ({ name: organization.name, value: organization.id })) ?? []
		const selected = [...[options.find(option => option.value == this.organization?.id) ?? []].flat()]
		return this.key ? (
			<smoothly-old-picker
				label="Organization"
				multiple={false}
				options={options}
				onMenuClose={event => this.menuCloseHandler(event)}
				selections={
					!selected.length
						? [{ name: this.translate("You are not a member of any organization"), value: "" }]
						: selected
				}
			/>
		) : (
			[]
		)
	}
}
