import { Component, Event, EventEmitter, Fragment, h, Host, Prop, State } from "@stencil/core"
import { langly } from "langly"
import { model } from "../../model"
import * as translation from "./translation"

export type Events = "submit" | "cancel" | "clear" | "start" | "end"

@Component({
	tag: "userwidgets-edit-button",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsEditButton {
	private events: { [event in Events]: (() => void)[] } = { submit: [], cancel: [], clear: [], start: [], end: [] }
	@Prop() state: model.State
	@Prop({ mutable: true }) changed = false
	@Prop() toggle = true
	@Prop() disabled = false
	@Prop() clearable = true
	@State() translate: langly.Translate = translation.create("en")
	@Event() userwidgetsEditLoad: EventEmitter<(event: Events, handler: () => void) => void>
	@Event() userwidgetsEditSubmit: EventEmitter<void>
	@Event() userwidgetsEditCancel: EventEmitter<void>
	@Event() userwidgetsEditClear: EventEmitter<void>
	@Event() userwidgetsEditStart: EventEmitter<void>
	@Event() userwidgetsEditEnd: EventEmitter<void>

	componentWillLoad() {
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
		this.userwidgetsEditLoad.emit((event, handler) => this.events[event].push(handler))
	}

	handleClick() {
		if (!this.changed)
			this.startHandler()
		else
			this.endHandler()
		this.changed = !this.changed
	}
	submitHandler() {
		this.userwidgetsEditSubmit.emit()
		this.events.submit.forEach(handler => handler())
	}
	cancelHandler() {
		this.userwidgetsEditCancel.emit()
		this.events.cancel.forEach(handler => handler())
	}
	clearHandler() {
		this.userwidgetsEditClear.emit()
		this.events.clear.forEach(handler => handler())
	}
	startHandler() {
		this.userwidgetsEditStart.emit()
		this.events.start.forEach(handler => handler())
	}
	endHandler() {
		this.userwidgetsEditEnd.emit()
		this.events.end.forEach(handler => handler())
	}

	render() {
		return (
			<Host class="edit">
				{(this.toggle && this.changed) || !this.toggle ? (
					<Fragment>
						<smoothly-submit
							key={"submit"}
							class={"button"}
							disabled={this.disabled}
							color="primary"
							size="flexible"
							fill="default"
							onClick={() => this.submitHandler()}>
							<smoothly-icon
								size="small"
								fill="default"
								color="primary"
								name="checkmark-outline"
								toolTip={this.translate("Submit changes")}
							/>
						</smoothly-submit>
						{this.clearable ? (
							<smoothly-input-clear
								key={"clear"}
								class={"button"}
								size="flexible"
								fill="default"
								color="primary"
								onClick={() => this.clearHandler()}>
								<smoothly-icon
									size="small"
									fill="default"
									color="primary"
									name="refresh-outline"
									toolTip={this.translate("Clear all fields")}
								/>
							</smoothly-input-clear>
						) : null}
						<smoothly-button
							key={"close"}
							class={"button"}
							size="flexible"
							fill="default"
							color="primary"
							onClick={() => (this.handleClick(), this.cancelHandler())}>
							<smoothly-icon
								size="small"
								fill="default"
								color="primary"
								name="close"
								toolTip={this.translate("Revert changes and close")}
							/>
						</smoothly-button>
					</Fragment>
				) : (
					<Fragment>
						<smoothly-button
							key={"open"}
							class={"button"}
							size="flexible"
							fill="default"
							color="primary"
							onClick={() => this.handleClick()}>
							<smoothly-icon
								size="small"
								fill="default"
								color="primary"
								name="pencil"
								toolTip={this.translate("Start editing")}
							/>
						</smoothly-button>
					</Fragment>
				)}
			</Host>
		)
	}
}
