import { Component, h, Host, Prop, State, Watch } from "@stencil/core"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { Name } from "@userwidgets/model/dist/User/Name"
import { model } from "../../model"

interface Change {
	name: Name
	email: string
	permissions: userwidgets.User.Permissions
}
@Component({
	tag: "userwidgets-user",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUser {
	@Prop() state: model.State
	@Prop() user: userwidgets.User.Readable
	@Prop() organization?: userwidgets.Organization
	@State() change?: Partial<Change>
	// include langly translations here as well
	@Watch("user")
	userChanged() {
		this.editEnd()
	}
	editStart(event: CustomEvent) {
		event.stopPropagation()
		this.change = { name: this.user.name }
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
		// waiting for model 0.5.x whatever
		userwidgets.User.Changeable.is(event.detail)
	}
	removeInvitation(user: string) {
		const users = this.organization?.users.filter(e => e != user)
		if (this.organization) {
			this.state.organizations.update(this.organization.id, { users: users })
		}
	}
	render() {
		return (
			<Host class={{ editing: !!this.change }}>
				<smoothly-form
					onSmoothlyFormInput={e => this.inputHandler(e)}
					onSmoothlyFormSubmit={e => this.submitHandler(e)}
					looks="grid">
					<smoothly-input
						name="name"
						readonly={!this.change}
						value={this.change ? this.change.name : this.user.name.first + " " + this.user.name.last}>
						Name
					</smoothly-input>
					<smoothly-input
						name="email"
						readonly={!this.change} //can we edit email? What happens then with the users userwidgets account?
						value={this.change ? this.change.email : this.user.email}>
						Email
					</smoothly-input>
					<userwidgets-edit-button
						class="submit"
						slot="submit"
						disabled={true}
						change={!!this.change}
						onUserwidgetsEditStart={e => {
							this.editStart(e)
						}}
						onUserwidgetsEditEnd={e => this.editEnd(e)}
					/>
					{this.organization ? (
						<smoothly-button
							class="submit"
							slot="submit"
							onClick={() => this.removeInvitation(this.user.email)}
							size="flexible">
							<smoothly-icon name="person-remove-sharp" size="tiny"></smoothly-icon>
						</smoothly-button>
					) : null}
				</smoothly-form>
			</Host>
		)
	}
}
