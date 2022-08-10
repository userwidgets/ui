import { Component, Event, EventEmitter, h, Listen, Prop } from "@stencil/core"
import * as gracely from "gracely"
import { Notice } from "smoothly"
import { client } from "../../../client"
import { model } from "../../../model"

@Component({
	tag: "userwidgets-change-name",
	styleUrl: "style.css",
	scoped: true,
})
export class ChangeName {
	private changed = false
	private initialName: model.userwidgets.User.Name
	@Event() notice: EventEmitter<Notice>
	@Prop() name: model.userwidgets.User.Name

	connectedCallback() {
		this.initialName = this.name
	}

	@Listen("smoothlyInput")
	handleInputChanged(event: CustomEvent<{ name: "first" | "last"; value: string }>) {
		this.name[event.detail.name] = event.detail.value
		this.changed = this.name.first == this.initialName.first && this.name.last == this.initialName.last ? false : true
	}
	@Listen("submit")
	async handleSubmit(event: Event) {
		event.preventDefault()
		event.stopPropagation()
		const name = Object.fromEntries(new FormData(event.target as HTMLFormElement))
		if (!model.userwidgets.User.Name.is(name))
			this.notice.emit(Notice.warn("Missing fields."))
		else if (!(this.name.first == this.initialName.first && this.name.last == this.initialName.last))
			this.notice.emit(Notice.warn("Names are not changed."))
		else {
			const response = await client.user.changeName("", name, "*")
			if (gracely.Error.is(response))
				this.notice.emit(Notice.warn(response.body))
		}
	}

	render() {
		return (
			<form>
				<smoothly-input name="first" type="text">
					{this.name.first}
				</smoothly-input>
				<smoothly-input name="last" type="text">
					{this.name.last}
				</smoothly-input>
				<smoothly-submit disabled={!this.changed}>Change name</smoothly-submit>
			</form>
		)
	}
}
