export class Listenable<T extends Record<string, any>> {
	#listeners: Listeners<T> = {}
	listen<K extends keyof T>(this: T & Listenable<T>, property: K, listener: Listener<T[K]>): void {
		this.#listeners[property]?.push(listener) ?? (this.#listeners[property] = [listener])
		listener(this[property])
	}
	unlisten<K extends keyof T>(property: K, listener: Listener<T[K]>): void {
		const index = this.#listeners[property]?.indexOf(listener)
		index != undefined && index >= 0 && this.#listeners[property]?.splice(index, 1)
	}
	static load<T extends Record<string, any>>(backend: T): T & Listenable<T> {
		const result = new Listenable()

		Object.entries({
			...Object.getOwnPropertyDescriptors(backend),
			...Object.getOwnPropertyDescriptors(Object.getPrototypeOf(backend)),
		}).forEach(
			([property, descriptor]: [
				keyof T,
				TypedPropertyDescriptor<T[string]> & PropertyDescriptor & TypedPropertyDescriptor<any>
			]) => {
				typeof descriptor.value == "function"
					? Object.defineProperty(result, property, {
							get() {
								return backend[property].bind(backend)
							},
					  })
					: descriptor.writable || descriptor.set
					? Object.defineProperty(result, property, {
							get() {
								return backend[property].bind(backend)
							},
							set(value: T[keyof T]) {
								backend[property] = value
								result.#listeners[property]?.forEach(listener => listener(value))
							},
					  })
					: Object.defineProperty(result, property, {
							get() {
								return backend[property].bind(backend)
							},
					  })
			}
		)
		return result as T & Listenable<T>
	}
}
export type Listener<V> = (value: V) => void
export type Listeners<T> = {
	[K in keyof T]?: Listener<T[K]>[]
}
