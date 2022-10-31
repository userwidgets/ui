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
					<smoothly-icon name="person-sharp"></smoothly-icon>
				</smoothly-button>
				<div class={this.menuOpen ? "overlay" : ""} onClick={() => this.handleClick()}></div>
				<div class="menu">
					<div>
						<slot></slot>
					</div>
				</div>
			</div>
		)
	}
}
