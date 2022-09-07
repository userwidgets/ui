import { Component, h, Prop } from "@stencil/core"

@Component({
	tag: "userwidgets-menu",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsMenu {
	@Prop({ mutable: true, reflect: true }) menuOpen = false

	handleClick() {
		this.menuOpen = !this.menuOpen
	}

	render() {
		return (
			<div>
				<smoothly-button fill="solid" color="primary" onClick={() => this.handleClick()}>
					<smoothly-icon name="menu"></smoothly-icon>
				</smoothly-button>
				<div class="menu">
					<div>
						<slot></slot>
					</div>
				</div>
			</div>
		)
	}
}
