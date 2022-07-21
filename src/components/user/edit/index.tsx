import { Component, Event, EventEmitter, h, Listen, Prop } from "@stencil/core"
import { model } from "../../../model"

@Component({
	tag: "userwidgets-user-edit",
	styleUrl: "style.css",
	scoped: true,
})
export class UserEdit {
	private initialUser: model.userwidgets.User
	@Prop() user: model.userwidgets.User
	@Event() updated: EventEmitter<model.userwidgets.User>
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
				<userwidgets-change-name name={this.user.name}></userwidgets-change-name>
				<userwidgets-set-password user={this.user}></userwidgets-set-password>
			</div>
		)
	}
}
