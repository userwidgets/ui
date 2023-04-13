import { HasListenable, Listenable, WithListenable } from "smoothly"

export class Base<T extends Base<any, any>, C = undefined> implements HasListenable<T> {
	public readonly listenable = new Listenable() as WithListenable<T>
	protected readonly client: C
	protected constructor(...parameters: C extends undefined ? [] : [client: C]) {
		this.client = parameters.length == 1 ? parameters[0] : (undefined as C)
	}
}
