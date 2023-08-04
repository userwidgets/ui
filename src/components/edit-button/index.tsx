import { Component, Event, EventEmitter, h, Host, Prop } from "@stencil/core"

@Component({
	tag: "userwidgets-edit-button",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsEditButton {
	@Prop({ mutable: true }) change = false
	@Prop() disabled = false
	@Event() userwidgetsEditStart: EventEmitter<void>
	@Event() userwidgetsEditEnd: EventEmitter<void>

	handleClick() {
		console.log("edit-button handleClick", this.change)
		!this.change
			? (this.userwidgetsEditStart.emit(), console.log("edit-button edit start"))
			: (this.userwidgetsEditEnd.emit(), console.log("edit-button edit end")) //can be here ,
		this.change = !this.change
	}
	render() {
		return (
			<Host class="edit button">
				{this.change ? (
					<smoothly-submit disabled={this.disabled} size="flexible">
						<smoothly-icon size="small" color="success" name="checkmark-outline" toolTip={"Submit changes"} />
					</smoothly-submit>
				) : null}
				<smoothly-button
					size={"flexible"}
					fill={!this.change ? "outline" : "default"}
					color={!this.change ? "primary" : "warning"}
					onClick={() => this.handleClick()}>
					<smoothly-icon
						size="small"
						fill={!this.change ? "outline" : "default"}
						name={!this.change ? "pencil" : "close"}
						toolTip={this.change ? "Stop editing and revert changes" : "Start editing"}
					/>
				</smoothly-button>
			</Host>
		)
	}
}
