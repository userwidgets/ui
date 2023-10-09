import { Component, Event, EventEmitter, h, Host, Prop, State } from "@stencil/core"
import { langly } from "langly"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"
import * as translation from "./translation"

interface Change {
	name: {
		first?: string
		last?: string
	}
}

@Component({
	tag: "userwidgets-me-name",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsMeName {
	@Prop() state: model.State
	@Prop() user: userwidgets.User | undefined
	@State() token?: userwidgets.User.Key | false
	@State() change?: Partial<Change>
	@State() request?: ReturnType<typeof this.state.users.update>
	@State() translate: langly.Translate = translation.create(document.documentElement)
	@Event() notice: EventEmitter<smoothly.Notice>

	async componentWillLoad() {
		this.state.me.listen("key", key => (this.token = key))
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
	}
	editStart(event: CustomEvent) {
		event.stopPropagation()
		this.change = { name: this.user ? this.user.name : this.token ? this.token.name : undefined }
	}
	editEnd(event?: CustomEvent) {
		event?.stopPropagation()
		this.change = undefined
	}
	inputHandler(event: CustomEvent<smoothly.Data>) {
		if (this.change)
			this.change = (({ name }) => ({ name }))({
				...this.change,
				name: { ...this.change.name, ...(typeof event.detail.name == "object" && event.detail.name) },
			})
	}
	async submitHandler(event: CustomEvent<smoothly.Data>) {
		this.inputHandler(event)
		const name = this.change?.name
		if (!userwidgets.User.Name.is(name)) {
			const message = `${this.translate("Malformed name.")}`
			this.notice.emit(smoothly.Notice.failed(message))
		} else if (!this.token) {
			const message = `${this.translate("Need a token")}`
			this.notice.emit(smoothly.Notice.failed(message))
		} else if (!(await (this.request = this.state.users.update(this.user?.email ?? this.token.email, { name })))) {
			const message = `${this.translate("Failed to update name")}`
			this.notice.emit(smoothly.Notice.failed(message))
		} else {
			const message = `${this.translate("Your name has been updated")}`
			this.notice.emit(smoothly.Notice.succeeded(message))
			this.change = undefined
			this.request = undefined
		}
	}
	render() {
		return (
			<Host>
				<smoothly-form
					processing={!!this.request}
					looks="border"
					onSmoothlyFormInput={e => this.inputHandler(e)}
					onSmoothlyFormSubmit={e => this.submitHandler(e)}>
					<smoothly-input
						readonly={!this.change}
						name="name.first"
						value={this.user ? this.user.name.first : this.token ? this.token.name.first : null}>
						{this.translate("First name")}
					</smoothly-input>
					<smoothly-input
						readonly={!this.change}
						name="name.last"
						value={this.user ? this.user.name.last : this.token ? this.token.name.last : null}>
						{this.translate("Last name")}
					</smoothly-input>
					<userwidgets-edit-button
						slot="submit"
						state={this.state}
						disabled={!!this.request}
						changed={!!this.change}
						onUserwidgetsEditStart={e => this.editStart(e)}
						onUserwidgetsEditEnd={e => this.editEnd(e)}
					/>
				</smoothly-form>
			</Host>
		)
	}
}
