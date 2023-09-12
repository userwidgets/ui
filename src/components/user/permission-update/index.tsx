import { Component, Event, EventEmitter, Prop, State } from "@stencil/core"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"

export interface CustomOption {
	name: string
	value: string[]
	checked: boolean
}

@Component({
	tag: "userwidgets-user-permissions-update",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsPermissionUpdate {
	@Prop({ mutable: true, reflect: true }) changed = false
	@Prop() state: model.State
	@Prop() user: userwidgets.User
	@Prop() label = "Permissions:"
	@Prop() options?: CustomOption[]
	@Prop() preventDefault = false
	@State() pickerOptions?: (smoothly.Option & { checked: boolean })[]
	@State() selectedOptions?: userwidgets.User.Permissions.Readable
	@State() key?: userwidgets.User.Key
	@State() organization?: userwidgets.Organization
	@Event() userPermissionUpdated: EventEmitter<userwidgets.User.Permissions>

	// @Watch("key")
	// @Watch("organization")
	// updateOptions() {
	// 	this.pickerOptions =
	// 		!this.organization || !this.key
	// 			? undefined
	// 			: Object.entries(
	// 					userwidgets.User.Permissions.Readable.assign(
	// 						userwidgets.User.Permissions.Readable.copy(this.key.permissions, false),
	// 						this.user.permissions
	// 					)[this.organization.id] ?? {}
	// 			  )
	// 					.map(
	// 						([resource, permission]) =>
	// 							permission &&
	// 							Object.keys(permission)
	// 								.map(access => ({
	// 									name: `${resource} ${access}`,
	// 									value: [`organization|${this.organization}|${resource}|${access}`],
	// 									checked:
	// 										!!this.user.permissions[this.organization?.id ?? ""]?.[resource]?.[
	// 											access as keyof userwidgets.User.Permissions.Permission
	// 										],
	// 								}))
	// 								.flat()
	// 					)
	// 					.flat()
	// 					.filter((option): option is Option & { checked: boolean } => !!option)
	// }

	// componentWillLoad() {
	// 	this.options && (this.pickerOptions = this.options)
	// 	!this.options && this.state.me.listen("key", key => (this.key = key || undefined)),
	// 		this.state.organizations.listen("current", organization => (this.organization = organization || undefined))
	// }

	// handleMenuClosed(event: CustomEvent<Option[]>) {
	// 	this.selectedOptions = event.detail.reduce<userwidgets.User.Permissions.Readable>(
	// 		(target, { value: values }) => (
	// 			Array.isArray(values) &&
	// 				values.forEach(value =>
	// 					(([match, organizationId, resource, action]) =>
	// 						match && model.nest(target, [organizationId, resource, action], true))(
	// 						(typeof value != "string" ? undefined : value.match(/^organization\|([^|]+)\|([^|]+)\|([^|]+)$/)) ?? []
	// 					)
	// 				),
	// 			target
	// 		),
	// 		userwidgets.User.Permissions.Readable.copy(this.key?.permissions ?? {}, false)
	// 	)
	// 	this.changed = !event.detail.every(detail =>
	// 		detail.value?.every((value: any) =>
	// 			(([_, id, resource, access]: (string | undefined)[]) =>
	// 				!id || !resource || !access ? false : this.user.permissions[id]?.[resource]?.[access as "read" | "write"])(
	// 				value?.split("|") ?? []
	// 			)
	// 		)
	// 	)
	// }

	// handleClick() {
	// 	!this.preventDefault &&
	// 		this.selectedOptions &&
	// 		this.state.users.updatePermissions(this.user.email, this.selectedOptions)
	// }

	// render() {
	// 	return (
	// 		<smoothly-form looks="line" onSmoothlyFormSubmit={event => event.preventDefault()}>
	// 			<div class={"inputs"}>
	// 				<smoothly-old-picker
	// 					label={this.label}
	// 					onMenuClose={event => this.handleMenuClosed(event)}
	// 					multiple={true}
	// 					options={this.pickerOptions}
	// 					selections={this.pickerOptions?.filter(option => option.checked) ?? []}
	// 				/>
	// 				<smoothly-button disabled={!this.changed} class={"button"} onClick={() => this.handleClick()}>
	// 					<slot></slot>
	// 				</smoothly-button>
	// 			</div>
	// 		</smoothly-form>
	// 	)
	// }
}
