import * as gracely from "gracely"
import * as model from "@userwidgets/model"
import { Client } from "../Client"

export class Users {
	#value?: Promise<model.User[]>
	get value(): Promise<model.User[]> {
		return this.#value ?? (this.#value = this.client.user.list().then(v => (gracely.Error.is(v) ? [] : v)))
	}
	set value(value: Promise<model.User[]>) {
		this.#value = value
		value.then(v => this.#listeners["changed"].forEach(listener => listener(v)))
	}
	#listeners: Users.Listeners = { changed: [], created: [] }
	constructor(private readonly client: Client) {}
	listen<E extends Users.Event>(event: E, listener: Users.Listener<Users.ListenerTypeMap[E]>): void {
		switch (event) {
			case "changed":
				this.value.then(v => listener(v as any)) // TODO fix type
				break
		}
		this.#listeners[event].push(listener)
	}
	create(user: model.User.Credentials): Promise<model.User | gracely.Error> {
		return this.client.user.create(user)
	}
}
export namespace Users {
	export type Event = typeof Event.values[number]
	export namespace Event {
		export const values = ["changed"] as const // temporarily removed "created"
	}
	export interface ListenerTypeMap extends Record<Event, any> {
		changed: model.User[]
		created: [model.User]
	}
	export type Listener<T> = (value: T | undefined) => void
	export type Listeners = {
		readonly [E in keyof ListenerTypeMap]: Listener<ListenerTypeMap[E]>[]
	}
}
