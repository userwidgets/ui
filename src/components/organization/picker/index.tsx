import { Component, h, Listen, Prop, State, Watch } from "@stencil/core"
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
	@State() application?: userwidgets.Application
	@State() organizations?: { name: string; value: string }[]
	@State() receivedKey?: (value: boolean) => void
	@State() translate: langly.Translate = translation.create("en")

	@Watch("key")
	handleKeyChange() {
		;(!this.key || !this.application) &&
			this.state.applications.listen("current", application => (this.application = application || undefined))
	}

	@Watch("application")
	handelApplicationChange() {
		this.application?.organizations &&
			(this.organizations = Object.values(this.application.organizations)
				.sort(({ permissions: a }, { permissions: b }) => Object.keys(b).length - Object.keys(a).length)
				.map(({ name, id }) => ({
					name: name,
					value: id,
				})))
		this.organizations?.length && (this.state.organizations.current = { organization: this.organizations[0].value })
	}
	componentWillLoad() {
		new Promise(resolve => (this.receivedKey = resolve)).then(() => {
			this.state.applications.listen("current", async promise => {
				const application = await promise
				this.application = application ? application : undefined
			})
		})
		this.state.me.listen("key", async promise => {
			const key = await promise
			this.key && key == undefined && this.state.me.key
			;(this.key = key ? key : undefined) && this.receivedKey && this.receivedKey(true)
		})
		this.state.locales.listen("language", language => (this.translate = translation.create(language)))
	}

	@Listen("menuClose")
	handleMenuClose(event: CustomEvent<Option[]>) {
		this.state.options.value = { organization: event.detail[0].value }
		event.stopPropagation()
	}
	render() {
		return this.key ? (
			<smoothly-old-picker
				label="Organization"
				multiple={false}
				options={this.organizations}
				selections={
					!this.organizations?.length
						? [{ name: this.translate("You are not a member of any organization"), value: "" }]
						: [this.organizations[0]]
				}></smoothly-old-picker>
		) : null
	}
}
