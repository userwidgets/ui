import { Component, Event, EventEmitter, h, Host, Prop, State, Watch } from "@stencil/core"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../model"

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
	@State() change?: Partial<Change>
	@State() request?: ReturnType<typeof this.state.organizations.update>
	@Event() notice: EventEmitter<smoothly.Notice>
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
	inputHandler(event: CustomEvent<smoothly.Data>) {
		if (this.change)
			this.change = (({ name }) => ({ name }))({ ...this.change, ...event.detail })
	}

	async submitHandler(event: CustomEvent<smoothly.Data>) {
		this.inputHandler(event)
		const detail = {
			name: this.change?.name,
		}
		const organization = userwidgets.Organization.Changeable.type.get(detail)
		if (!organization) {
			this.notice.emit(smoothly.Notice.failed("Malformed organization"))
			console.error(userwidgets.Organization.flaw(detail))
		} else if (!(await (this.request = this.state.organizations.update(this.organization.id, organization))))
			this.notice.emit(smoothly.Notice.failed("Failed to change organization"))
		else
			this.notice.emit(smoothly.Notice.succeeded("Changed organization"))
		this.request = undefined
	}

	render() {
		return (
			<Host class={{ editing: !!this.change }}>
				<smoothly-form
					onSmoothlyFormInput={e => this.inputHandler(e)}
					onSmoothlyFormSubmit={e => this.submitHandler(e)}
					looks={"grid"}>
					<smoothly-input
						name="name"
						readonly={!this.change}
						value={this.change ? this.change.name : this.organization.name}>
						Name
					</smoothly-input>
					<userwidgets-edit-button
						slot="submit"
						disabled={!!this.request || this.change?.name == this.organization.name}
						change={!!this.change}
						onUserwidgetsEditStart={e => {
							this.editStart(e)
						}}
						onUserwidgetsEditEnd={e => this.editEnd(e)}
					/>
				</smoothly-form>
			</Host>
		)
	}
}
