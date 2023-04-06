import { Config } from "@stencil/core"
import { sass } from "@stencil/sass"
import dotenv from "rollup-plugin-dotenv"
// import typescript from "rollup-plugin-typescript"

// https://stenciljs.com/docs/config
export const config: Config = {
	namespace: "userwidgets",
	globalStyle: "src/global/app.css",
	globalScript: "src/global/app.ts",
	taskQueue: "async",
	srcDir: "./src",
	tsconfig: "./tsconfig.json",
	sourceMap: true,
	outputTargets: [
		{
			type: "dist",
			esmLoaderPath: "../loader",
		},
		{
			type: "dist-custom-elements-bundle",
		},
		{
			type: "www",
			buildDir: "",
			// comment the following line to disable service workers in production
			serviceWorker: null,
		},
	],
	devServer: {
		openBrowser: false,
	},
	plugins: [dotenv(), sass()],
}
