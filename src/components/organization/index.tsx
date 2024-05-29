import { Component, ComponentWillLoad, Event, EventEmitter, h, Host, Prop, State, VNode } from "@stencil/core"
import { langly } from "langly"
import { smoothly } from "smoothly"
import { SmoothlyFormCustomEvent } from "smoothly/dist/types/components"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../model"
import * as translation from "./translation"

// TODO make adjustments and test when new smoothly changes to form are in

@Component({
	tag: "userwidgets-organization",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsOrganization implements ComponentWillLoad {
	@Prop() organization: userwidgets.Organization
	@Prop() state: model.State
	@State() translate: langly.Translate = translation.create("en")
	@Event() notice: EventEmitter<smoothly.Notice>

	componentWillLoad(): void {
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
	}

	async submitHandler(event: SmoothlyFormCustomEvent<smoothly.Submit>): Promise<void> {
		event.stopPropagation()
		const organization = userwidgets.Organization.Changeable.type.get(event.detail.value)
		if (!organization) {
			this.notice.emit(smoothly.Notice.failed(this.translate("Malformed organization")))
			console.error(userwidgets.Organization.flaw(event.detail.value))
		} else {
			const result = await this.state.organizations.update(organization, { id: this.organization.id })
			if (!result)
				this.notice.emit(smoothly.Notice.failed(this.translate("Failed to change organization")))
			else {
				this.notice.emit(smoothly.Notice.succeeded(this.translate("Changed organization")))
				event.detail.result(true)
			}
		}
		event.detail.result(false)
	}

	render(): VNode | VNode[] {
		return (
			<Host>
				<smoothly-form looks={"grid"} type={"update"} readonly onSmoothlyFormSubmit={e => this.submitHandler(e)}>
					<smoothly-input name="name" value={this.organization.name}>
						{this.translate("Name")}
					</smoothly-input>
					<smoothly-input-edit slot={"edit"} type={"button"} size={"icon"} color={"primary"} fill={"default"} />
					<smoothly-input-reset slot={"reset"} type={"form"} size={"icon"} color={"warning"} fill={"default"} />
					<smoothly-input-submit slot={"submit"} size={"icon"} color={"success"} fill={"default"} />
				</smoothly-form>
				<userwidgets-user-list-organization state={this.state} />
			</Host>
		)
	}
}
