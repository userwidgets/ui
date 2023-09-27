import { Component, Event, EventEmitter, h, Host, Prop, State } from "@stencil/core"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../../model"

@Component({
	tag: "userwidgets-user-list-invite",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserListInvite {
	private form?: HTMLSmoothlyFormElement
	@Prop() state: model.State
	@State() invite?: Partial<userwidgets.Organization.Changeable.Invite> = {}
	@Event() userwidgetsFormControls: EventEmitter<{ clear: () => void }>

	componentWillLoad() {
		this.userwidgetsFormControls.emit({ clear: () => this.form?.clear() })
	}

	inputHandler(event: CustomEvent<smoothly.Data>) {
		event.stopPropagation()
	}

	async submitHandler(event: CustomEvent<smoothly.Data>) {
		this.inputHandler(event)
	}

	render() {
		return (
			<Host>
				<smoothly-form
					ref={e => (this.form = e)}
					looks="grid"
					onSmoothlyFormInput={e => this.inputHandler(e)}
					onSmoothlyFormSubmit={e => this.submitHandler(e)}>
					<smoothly-input type="email" name={"user"} value={this.invite?.user}>
						Email
					</smoothly-input>
					<userwidgets-edit-button state={this.state} toggle={false} slot="submit" />
				</smoothly-form>
			</Host>
		)
	}
}
