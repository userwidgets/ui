import { Component, Event, EventEmitter, h, Host, Prop, State, VNode, Watch } from "@stencil/core"
import { langly } from "langly"
import { smoothly } from "smoothly"
import { SmoothlyFormCustomEvent } from "smoothly/dist/types/components"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../model"
import * as translation from "./translation"

interface Change {
	name: string
}

@Component({
	tag: "userwidgets-organization",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsOrganization {
	@Prop() organization: userwidgets.Organization
	@Prop() state: model.State
	@State() translate: langly.Translate = translation.create("en")
	@State() change?: Partial<Change>
	@State() request?: ReturnType<typeof this.state.organizations.update>
	@Event() notice: EventEmitter<smoothly.Notice>

	componentWillLoad() {
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
	}

	@Watch("organization")
	organizationChanged() {
		this.editEnd()
	}
	editStart(event: CustomEvent) {
		event.stopPropagation()
		this.change = { name: this.organization.name }
	}
	editEnd(event?: CustomEvent) {
		event?.stopPropagation()
		this.change = undefined
	}
	inputHandler(event: SmoothlyFormCustomEvent<unknown>, data: smoothly.Data): void {
		event.stopPropagation()
		if (this.change)
			this.change = (({ name }) => ({ name }))({ ...this.change, ...data })
	}

	async submitHandler(
		event: SmoothlyFormCustomEvent<{ type: "update" | "change" | "fetch" | "create" | "remove"; value: smoothly.Data }>
	): Promise<void> {
		this.inputHandler(event, event.detail.value)
		const detail = {
			name: this.change?.name,
		}
		const organization = userwidgets.Organization.Changeable.type.get(detail)
		if (!organization) {
			this.notice.emit(smoothly.Notice.failed(this.translate("Malformed organization")))
			console.error(userwidgets.Organization.flaw(detail))
		} else if (!(await (this.request = this.state.organizations.update(organization, { id: this.organization.id }))))
			this.notice.emit(smoothly.Notice.failed(this.translate("Failed to change organization")))
		else
			this.notice.emit(smoothly.Notice.succeeded(this.translate("Changed organization")))
		this.request = undefined
	}

	render(): VNode | VNode[] {
		return (
			<Host class={{ editing: !!this.change }}>
				<smoothly-form
					onSmoothlyFormInput={e => this.inputHandler(e, e.detail)}
					onSmoothlyFormSubmit={e => this.submitHandler(e)}
					looks={"grid"}>
					<smoothly-input
						name="name"
						readonly={!this.change}
						value={this.change ? this.change.name : this.organization.name}>
						{this.translate("Name")}
					</smoothly-input>
					<userwidgets-edit-button
						slot="submit"
						state={this.state}
						disabled={!!this.request || this.change?.name == this.organization.name}
						changed={!!this.change}
						onUserwidgetsEditStart={e => {
							this.editStart(e)
						}}
						onUserwidgetsEditEnd={e => this.editEnd(e)}
					/>
				</smoothly-form>
				<userwidgets-user-list-organization state={this.state} />
			</Host>
		)
	}
}
