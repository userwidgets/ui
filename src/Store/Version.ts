import * as gracely from "gracely"
import { Client } from "../Client"

export class Version {
	#value: Promise<{ name: string; version: string } | undefined>
	get value(): Promise<{ name: string; version: string } | undefined> {
		return this.#value ?? (this.#value = this.client.version.fetch().then(v => (gracely.Error.is(v) ? undefined : v)))
	}
	#listeners: Version.Listeners = { changed: [] }
	constructor(private readonly client: Client) {}
	listen<E extends Version.Event>(event: E, listener: Version.Listener<Version.ListenerTypeMap[E]>): void {
		switch (event) {
			case "changed":
				this.value.then(v => listener(v))
				break
		}
		this.#listeners[event].push(listener)
	}
}

export namespace Version {
	export type Event = typeof Event.values[number]
	export namespace Event {
		export const values = ["changed"] as const
	}
	export interface ListenerTypeMap extends Record<Event, any> {
		changed: { name: string; version: string }
	}
	export type Listener<T> = (value: T | undefined) => void
	export type Listeners = {
		readonly [E in keyof ListenerTypeMap]: Listener<ListenerTypeMap[E]>[]
	}
}
