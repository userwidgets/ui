import { Component, h, Prop } from "@stencil/core"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"

@Component({
	tag: "userwidgets-organization-user-remove",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsOrganizationUserRemove {
	@Prop() state: model.State
	@Prop() user: userwidgets.User.Readable
	@Prop() organization: any

	render() {
		return (
			<smoothly-form looks="line" onSmoothlyFormSubmit={event => event.preventDefault()}>
				<smoothly-button class={"button"}>
					<slot></slot>
				</smoothly-button>
			</smoothly-form>
		)
	}
}
