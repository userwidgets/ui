import { Component, Event, EventEmitter, h, Listen, Prop, State } from "@stencil/core"
import * as gracely from "gracely"
import * as langly from "langly"
import { Notice } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { client } from "../../../Client"
import { model } from "../../../model"
import * as translation from "./translation"

@Component({
	tag: "userwidgets-change-name",
	styleUrl: "style.css",
	scoped: true,
})
export class ChangeName {
	private changed = false
	private initialName: userwidgets.User.Name
	@Event() notice: EventEmitter<Notice>
	@Prop() state: model.State
	@Prop() name: userwidgets.User.Name
	@State() translate: langly.Translate = translation.create("en")

	componentWillLoad() {
		this.initialName = this.name
		this.state.locales.listen("language", language => (this.translate = translation.create(language)))
	}

	@Listen("smoothlyInput")
	handleInputChanged(event: CustomEvent<{ name: "first" | "last"; value: string }>) {
		this.name[event.detail.name] = event.detail.value
		this.changed = this.name.first == this.initialName.first && this.name.last == this.initialName.last ? false : true
	}

	async handleSubmit(event: Event) {
		event.preventDefault()
		event.stopPropagation()
		const name = Object.fromEntries(new FormData(event.target as HTMLFormElement))
		if (!userwidgets.User.Name.is(name))
			this.notice.emit(Notice.warn(this.translate("Missing fields.")))
		else if (!(this.name.first == this.initialName.first && this.name.last == this.initialName.last))
			this.notice.emit(Notice.warn(this.translate("Names are not changed.")))
		else {
			const response = await client.user.changeName("", name)
			if (gracely.Error.is(response))
				this.notice.emit(Notice.warn(response.body))
		}
	}

	render() {
		return (
			<smoothly-form looks="line" onSmoothlyFormSubmit={(e: Event) => this.handleSubmit(e)}>
				<smoothly-input name="first" type="text">
					{this.name.first}
				</smoothly-input>
				<smoothly-input name="last" type="text">
					{this.name.last}
				</smoothly-input>
				<smoothly-submit disabled={!this.changed}>{this.translate("Change name")}</smoothly-submit>
			</smoothly-form>
		)
	}
}
