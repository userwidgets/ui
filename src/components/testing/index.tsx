import { Component, h, Prop } from "@stencil/core"
import { RecursiveData } from "./type"

@Component({
	tag: "a-table",
})
export class Table {
	@Prop() data: RecursiveData

	render() {
		return (
			<div>
				{this.data ? (
					<div>
						{this.data.data}
						<a-table data={this.data.next}></a-table>
					</div>
				) : null}
			</div>
		)
	}
}
