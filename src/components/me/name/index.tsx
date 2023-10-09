import { Component, Event, EventEmitter, h, Host, Prop, State } from "@stencil/core"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"

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
	@Event() notice: EventEmitter<smoothly.Notice>

	async componentWillLoad() {
		this.state.me.listen("key", key => (this.token = key))
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
		console.log("inputHandler, this.change", this.change, "event.detail", event.detail)
	}
	async submitHandler(event: CustomEvent<smoothly.Data>) {
		this.inputHandler(event)
		const name = this.change?.name
		if (!userwidgets.User.Name.is(name))
			this.notice.emit(smoothly.Notice.failed("Malformed name."))
		else if (!this.token)
			this.notice.emit(smoothly.Notice.failed("need a token"))
		else if (!(await this.state.users.update(this.user?.email ?? this.token.email, { name })))
			this.notice.emit(smoothly.Notice.failed("failed to update name"))
		else {
			this.notice.emit(smoothly.Notice.succeeded("Your name has been updated"))
			this.change = undefined
			this.request = undefined
		}
	}
	render() {
		return (
			<Host>
				<smoothly-form
					looks="border"
					onSmoothlyFormInput={e => this.inputHandler(e)}
					onSmoothlyFormSubmit={e => this.submitHandler(e)}>
					<smoothly-input
						readonly={!this.change}
						name="name.first"
						value={this.user ? this.user.name.first : this.token ? this.token.name.first : null}>
						First name
					</smoothly-input>
					<smoothly-input
						readonly={!this.change}
						name="name.last"
						value={this.user ? this.user.name.last : this.token ? this.token.name.last : null}>
						Last name
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
