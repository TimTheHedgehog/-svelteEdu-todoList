import {defineConfig} from "vite";
import {svelte} from "@sveltejs/vite-plugin-svelte";
import path from "path";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	css: {
		postcss: {
			plugins: [autoprefixer()],
		},
	},
	build: {
		outDir: "./docs",
		base: "./",
	},
	resolve: {
		alias: {
			$lib: path.resolve("./src/lib"),
			$assets: path.resolve("./src/assets"),
		},
	},
});
