import { JSXBase } from "@stencil/core/internal"
export interface TableData {
	headings: string[]
	rows: {
		cells: (JSXBase.IntrinsicElements | string)[]
		detail?: JSXBase.IntrinsicElements
		next?: TableData[]
	}[]
}
