import { Component, Event, EventEmitter, h, Host, Prop, State } from "@stencil/core"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"

interface Change {
	name: {
		first: string
		last: string
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
	@State() request?: ReturnType<typeof this.state.users.
	@Event() notice: EventEmitter<smoothly.Notice>
	private edit: false //don't think im going to need this one

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
			this.change = (({ name }) => ({ name }))({ ...this.change, ...event.detail })
	}
	submitHandler(event: CustomEvent<smoothly.Data>) {
		this.inputHandler(event)
		const name = { name: this.change?.name }
		if (!userwidgets.User.Name.is(name))
			this.notice.emit(smoothly.Notice.failed("Malformed name."))
		else if (!(await (this.req)))
	}
	render() {
		return (
			<Host>
				<smoothly-form
					looks="border"
					onSmoothlyFormInput={e => this.inputHandler(e)}
					onSmoothlyFormSubmit={e => this.submitHandler(e)}>
					<smoothly-input
						readonly={!this.edit}
						name="First name"
						value={this.user ? this.user.name.first : this.token ? this.token.name.first : null}>
						First name
					</smoothly-input>
					<smoothly-input
						readonly={!this.edit}
						name="Last name"
						value={this.user ? this.user.name.last : this.token ? this.token.name.last : null}>
						Last name
					</smoothly-input>
					{/* edit-button is what we want to use */}
					<userwidgets-edit-button
						slot="submit"
						onUserwidgetsEditStart={e => this.editStart(e)}
						onUserwidgetsEditEnd={e => this.editEnd(e)}
					/>
				</smoothly-form>
			</Host>
		)
	}
}
