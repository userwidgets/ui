import { Component, h, Listen, State } from "@stencil/core"
import { model } from "../../../model"
import { store } from "../../../Store"
import { TableData } from "./TableData"

@Component({
	tag: "userwidgets-user-list",
	styleUrl: "style.css",
	scoped: true,
})
export class UserList {
	componentWillLoad() {
		store.users.listen("changed", users => (users ? (this.users = users) : []))
	}
	@State() users: model.userwidgets.User[]
	@Listen("updated")
	handleUpdated(event: CustomEvent<model.userwidgets.User>) {
		event.stopPropagation()
		this.users[this.users.findIndex(user => user.email == event.detail.email)] = event.detail
	}
	transform(users: model.userwidgets.User[]): TableData {
		return {
			headings: ["User", "Email"],
			rows: users.map(user => ({
				cells: [`${user.name.first} ${user.name.last}`, user.email],
				detail: <userwidgets-user-edit user={user}></userwidgets-user-edit>,
			})),
		}
	}
	render() {
		return (
			<form>
				<listing-component tableData={this.transform(this.users)}></listing-component>
			</form>
		)
	}
}
