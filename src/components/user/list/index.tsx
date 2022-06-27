import { Component, h, Listen, Prop } from "@stencil/core"
import { User } from "../../../../model"
import { TableData } from "./TableData"

@Component({
	tag: "uw-user-list",
	styleUrl: "style.css",
	scoped: true,
})
export class UserList {
	@Prop({ mutable: true }) users: User[]
	@Listen("updated")
	handleUpdated(event: CustomEvent<User>) {
		event.stopPropagation()
		this.users[this.users.findIndex(user => user.email == event.detail.email)] = event.detail
	}
	transform(users: User[]): TableData {
		return {
			headings: ["User", "Email"],
			rows: users.map(user => ({
				cells: [`${user.name.first} ${user.name.last}`, user.email],
				detail: <uw-user-edit user={user}></uw-user-edit>,
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
