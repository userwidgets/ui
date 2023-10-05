import { Component, Element, Event, EventEmitter, h, Host, Listen, Prop, State, Watch } from "@stencil/core"
import { langly } from "langly"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { model } from "../../../model"
import * as translation from "./translation"

type Permissions = string[]
namespace Permissions {
	export const type = isly.array<Permissions>(isly.string())
}

@Component({
	tag: "userwidgets-permission-picker",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsPermissionPicker {
	@Element() element: HTMLElement
	@Prop() state: model.State
	@Prop() organization?: userwidgets.Organization
	@Prop() user: userwidgets.User
	@Prop() default = false
	@Prop() readonly = false
	@Prop() name = "permissions"
	@State() roles?: model.Role[]
	@State() translate: langly.Translate = translation.create(document.documentElement)
	@Event() smoothlyInput: EventEmitter<smoothly.Data>
	private subscriptions = {
		default: (roles: model.State["roles"]["default"]) => (this.roles = roles),
		value: (roles: model.State["roles"]["value"]) => (this.roles = roles),
	}
	@Watch("default")
	componentWillLoad() {
		if (this.default) {
			this.state.roles.unlisten("value", this.subscriptions.value)
			this.state.roles.listen("default", this.subscriptions.default)
		} else {
			this.state.roles.unlisten("default", this.subscriptions.default)
			this.state.roles.listen("value", this.subscriptions.value)
		}
	}

	@Listen("smoothlyInput")
	inputHandler(event: CustomEvent<smoothly.Data>) {
		if (event.target != this.element) {
			event.stopPropagation()
			if (Permissions.type.is(event.detail.permissions)) {
				this.smoothlyInput.emit({
					permissions: event.detail.permissions.reduce(
						(result, permission) => userwidgets.User.Permissions.merge(result, permission),
						""
					),
				})
			}
		}
	}
	render() {
		return (
			<Host>
				<smoothly-picker
					key={(this.organization?.id ?? "") + this.roles?.map(role => role.label).join(" ")}
					name={this.name}
					mutable={false}
					multiple={true}
					readonly={this.readonly}
					onSmoothlyInput={e => this.inputHandler(e)}>
					<span slot="label">{this.translate("Permissions")}</span>
					<span slot="search">{this.translate("Search")}</span>
					{this.organization &&
						this.roles?.map(role => {
							const permissions = !this.organization?.id ? undefined : role.permissions(this.organization.id)
							return permissions == undefined ? null : (
								<smoothly-picker-option
									selected={userwidgets.User.Permissions.check(this.user.permissions, permissions)}
									value={permissions}>
									{role.label}
								</smoothly-picker-option>
							)
						})}
				</smoothly-picker>
			</Host>
		)
	}
}
