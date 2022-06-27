import { Component, Event, EventEmitter, h, Listen, Prop } from "@stencil/core"
import { User } from "../../../../model"
@Component({
	tag: "uw-user-edit",
	styleUrl: "style.css",
	scoped: true,
})
export class UserEdit {
	private initialUser: User
	@Prop() user: User
	@Event() updated: EventEmitter<User>
	connectedCallback() {
		this.initialUser = structuredClone(this.user)
	}
	@Listen("submit")
	handleSubmit(event: Event) {
		event.preventDefault()
		event.stopPropagation()
		console.log("SUBMITTED")
		this.updated.emit(this.user)
	}
	@Listen("revert")
	handleRevert() {
		this.user = structuredClone(this.initialUser)
	}

	render() {
		return (
			<div>
				<uw-change-name user={this.user}></uw-change-name>
				<uw-set-password user={this.user}></uw-set-password>
			</div>
		)
	}
}
