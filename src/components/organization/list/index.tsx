import { Component, Prop, State } from "@stencil/core"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"

@Component({
	tag: "userwidgets-organization-list",
	styleUrl: "style.css",
	scoped: true,
})
export class userwidgetsOrganizationList {
	@Prop() state: model.State
	@State() organizations?: userwidgets.Organization[]
	@State() key?: userwidgets.User.Key
}
