import { Component, Event, EventEmitter, h, Prop, State, Watch } from "@stencil/core"
import { Option } from "smoothly"
import { model } from "../../../model"
import { Me } from "../../../State"
import { User } from "../../../State"
import { Listenable } from "../../../State/Listenable"
import { Options } from "../../../State/Options"

interface StateInterface {
	user: User & Listenable<User>
	options: Options
	me: Me & Listenable<Me>
}

type StateType = StateInterface & Listenable<StateInterface>

function nest<T extends Record<string, any>>(target: T, [head, ...tail]: string[], value: any): T {
	return (
		(target[head as keyof T] = tail.length
			? nest(target[head] != undefined ? target[head] : (target[head as keyof T] = {} as T[keyof T]), tail, value)
			: value),
		target as T
	)
}

export interface CustomOption {
	name: string
	value: string[]
}

@Component({
	tag: "userwidgets-user-permissions-update",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsPermissionUpdate {
	@Prop() state: StateType
	@Prop() user: model.userwidgets.User.Readable
	@Prop() label = "Permissions:"
	@Prop() options?: CustomOption[]
	@State() pickerOptions?: Option[]
	@State() selectedOptions?: model.userwidgets.User.Permissions.Readable
	@State() key?: model.userwidgets.User.Key
	@State() organizationId?: string
	@Event() userPermissionUpdated: EventEmitter<model.userwidgets.User.Permissions.Readable>

	@Watch("key")
	@Watch("organizationId")
	updateOptions() {
		this.pickerOptions =
			!this.organizationId || !this.key
				? undefined
				: Object.entries(
						model.userwidgets.User.Permissions.Readable.assign(
							model.userwidgets.User.Permissions.Readable.copy(this.key.permissions, false),
							this.user.permissions
						)[this.organizationId] ?? {}
				  )
						.map(
							([resource, permission]) =>
								permission &&
								Object.keys(permission)
									.map(access => ({
										name: `${resource} ${access}`,
										value: [[`organization|${this.organizationId}|${resource}|${access}`]],
									}))
									.flat()
						)
						.flat()
						.filter((option): option is Option => !!option)
	}

	componentWillLoad() {
		this.options && (this.pickerOptions = this.options)
		this.options &&
			this.state.me.listen("key", async promise => {
				const key = await promise
				this.key = !key ? undefined : key
			})
		this.state.listen("options", options => (this.organizationId = options.organizationId))
	}

	handleMenuClosed(event: CustomEvent<Option[]>) {
		this.selectedOptions = event.detail.reduce<model.userwidgets.User.Permissions.Readable>((target, { value }) => {
			const [match, organizationId, resource, action] =
				(typeof value != "string" ? undefined : value.match(/^organization\|([^|]+)\|([^|]+)\|([^|]+)$/)) ?? []
			return match ? nest(target, [organizationId, resource, action], true) : target
		}, model.userwidgets.User.Permissions.Readable.copy(this.key?.permissions ?? {}, false))
	}

	handleClick() {
		this.selectedOptions && this.state.user.updatePermissions(this.selectedOptions)
	}

	render() {
		return (
			<form onSubmit={event => event.preventDefault()}>
				<span>{this.label}</span>
				<div class={"inputs"}>
					<smoothly-picker
						label={this.label}
						onMenuClose={event => this.handleMenuClosed(event)}
						multiple={true}
						options={this.pickerOptions}></smoothly-picker>
					<smoothly-button onClick={() => this.handleClick()}>Update</smoothly-button>
				</div>
			</form>
		)
	}
}
