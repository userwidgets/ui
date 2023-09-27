import { Component, h, Host, Listen, Prop, State } from "@stencil/core"
import { model } from "../../../../../model"
import { Events } from "../../../../edit-button"

@Component({
	tag: "userwidgets-user-list-invite-cell",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserListInviteCell {
	private formControls?: { clear: () => void }
	@Prop() state: model.State
	@State() open = false

	@Listen("userwidgetsFormControls")
	formControlsHandler(event: CustomEvent<{ clear: () => void }>) {
		event.stopPropagation()
		this.formControls = event.detail
	}
	@Listen("userwidgetsEditCancel")
	cancelHandler(event?: CustomEvent<unknown>) {
		event?.stopPropagation()
		this.open = false
		this.formControls?.clear()
	}
	@Listen("userwidgetsEditLoad")
	editLoadHandler(event: CustomEvent<(event: Events, handler: () => void) => void>) {
		event.stopPropagation()
		event.detail("cancel", () => this.cancelHandler())
	}
	expandableChangeHandler(event: CustomEvent<boolean>) {
		this.open = event.detail
		if (!this.open)
			this.cancelHandler(event)
	}

	render() {
		return (
			<Host>
				<smoothly-table-expandable-cell
					open={this.open}
					onSmoothlyExpandableChange={e => this.expandableChangeHandler(e)}>
					<smoothly-button size="flexible">
						<smoothly-icon name="person-add-outline" size="small" />
					</smoothly-button>
					<userwidgets-user-list-invite slot="detail" state={this.state}>
						<slot slot="detail" name="detail" />
					</userwidgets-user-list-invite>
				</smoothly-table-expandable-cell>
			</Host>
		)
	}
}
