import { Component, h, Prop, State, Watch } from "@stencil/core"
import { Option } from "smoothly"
import { model } from "../../../model"
import { Me } from "../../../State"
import { Listenable } from "../../../State/Listenable"
import { Options } from "../../../State/Options"
import { User } from "../../../State/User"

function nest<T = Record<string, any>>(target: Record<string, any>, [head, ...tail]: string[], value: any): T {
	return (
		(target[head] = tail.length
			? nest(target[head] != undefined ? target[head] : (target[head] = {}), tail, value)
			: value) && target
	)
}

interface StateInterface {
	user: User & Listenable<User>
	options: Options
	me: Me & Listenable<Me>
}

export type StateType = StateInterface & Listenable<StateInterface>

@Component({
	tag: "userwidgets-user-list",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserList {
	@Prop() state: StateType
	@Prop() overridePermissionOptions?: Options[]
	@State() permissionOptions?: Option[]
	@State() users?: model.userwidgets.User.Readable[]
	@State() organizationId?: string
	@State() key?: model.userwidgets.User.Key
	@Watch("key")
	@Watch("organizationId")
	updatePermissionOptions() {
		!this.overridePermissionOptions &&
			(this.permissionOptions =
				!this.organizationId || !this.key
					? undefined
					: Object.entries(this.key.permissions[this.organizationId] ?? {})
							.map(
								([resource, permissions]) =>
									permissions && [
										permissions.read && {
											name: `${resource} read`,
											value: [`organization|${this.organizationId}|${resource}|read`],
										},
										permissions.write && {
											name: `${resource} write`,
											value: [`organization|${this.organizationId}|${resource}|write`],
										},
									]
							)
							.flat()
							.filter((option): option is Option => !!option))
	}
	componentWillLoad() {
		this.state.user.listen("users", async promise => {
			const users = await promise
			this.users = users ? users : undefined
		})
		// maybe not necessary to setup if overridePermissions are given?
		this.state.me.listen("key", async promise => {
			const key = await promise
			this.key = key ? key : undefined
		})
		// maybe not necessary to setup if overridePermissions are given?
		this.state.listen("options", options => (this.organizationId = options.organizationId))
	}
	handleMenuClosed(event: CustomEvent<Option[]>) {
		event.detail.reduce<model.userwidgets.User.Permissions.Readable>((permissions, { value }) => {
			const [match, organizationId, resource, action] =
				(typeof value == "string" ? value.match("^organization\\|([^|]+)\\|([^|]+)\\|([^|]+)$") : undefined) ?? []
			return match ? nest(permissions, [organizationId, resource, action], true) : permissions
		}, {})
	}
	render() {
		return (
			<smoothly-table>
				<smoothly-table-row>
					<smoothly-table-header>Name</smoothly-table-header>
					<smoothly-table-header>Email</smoothly-table-header>
				</smoothly-table-row>
				{this.users?.map(user => (
					<smoothly-table-expandable-row>
						<smoothly-table-cell>{[user.name.first, user.name.last].join(" ")}</smoothly-table-cell>
						<smoothly-table-cell>{user.email}</smoothly-table-cell>
						<div class={"detail"} slot="detail">
							<slot name={user.email}></slot>
							<div class={"table"}>
								<div>
									<span>Status:</span>
									<span>Invited/Member</span>
								</div>
								<div>
									<span>Role:</span>
									<div>
										<smoothly-picker
											multiple={true}
											onMenuClose={event => this.handleMenuClosed(event)}></smoothly-picker>
										<smoothly-button>Update</smoothly-button>
									</div>
								</div>
								<div>
									<smoothly-button onClick={() => console.log("delete")}>Delete</smoothly-button>
								</div>
							</div>
						</div>
					</smoothly-table-expandable-row>
				))}
			</smoothly-table>
		)
	}
}
