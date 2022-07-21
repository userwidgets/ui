import * as gracely from "gracely"
import * as model from "@userwidgets/model"
import { Client } from "../Client"

export class Me {
	#value?: Promise<model.User.Key | undefined>
	get value(): Promise<model.User.Key | undefined> {
		return this.#value ?? Promise.resolve(undefined)
	}
	#listeners: Me.Listeners = { changed: [], unauthorized: [] }
	constructor(private readonly client: Client) {
		this.client.onUnauthorized = () =>
			new Promise(resolve => this.#listeners.unauthorized.forEach(listener => listener(resolve)))
	}
	listen<E extends Me.Event>(event: E, listener: Me.Listener<Me.ListenerTypeMap[E]>): void {
		switch (event) {
			case "changed":
				this.value.then(value => listener(value as any)) // TODO fix type
				break
			case "unauthorized":
				break
		}
		this.#listeners[event].push(listener as any) // TODO fix type
	}
	login(user: model.User.Credentials): Promise<model.User.Key | gracely.Error> {
		const result = this.client.me.login(user)
		this.#value = result.then(u => {
			const result = gracely.Error.is(u) ? undefined : u
			if (result)
				this.#listeners.changed.forEach(listener => listener(result))
			return result
		})
		return result
	}
}
export namespace Me {
	export type Event = typeof Event.values[number]
	export namespace Event {
		export const values = ["changed", "unauthorized"] as const
	}
	export interface ListenerTypeMap extends Record<Event, any> {
		changed: model.User.Key
		unauthorized: (cancel: boolean) => void
	}
	export type Listener<T> = (value: T | undefined) => void
	export type Listeners = {
		readonly [E in keyof ListenerTypeMap]: Listener<ListenerTypeMap[E]>[]
	}
}
