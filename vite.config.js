import { defineConfig } from "vite";
import { resolve } from "node:path";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import InertiaI18n from "inertia-i18n/vite";
import AutoImport from "unplugin-auto-import/vite";
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
	resolve: {
		alias: {
			inertiaRoutes: resolve("vendor/adminui/inertia-routes"),
		},
	},
	plugins: [
		AutoImport({
			imports: [
				"vue",
				"@vueuse/core",
				"@vueuse/math",
				"pinia",
				{
					"@inertiajs/vue3": ["router", "useForm", "usePage"],
					inertiaRoutes: ["useRoute"],
					"vue-i18n": ["useI18n"],
				},
			],
			dirs: ["./resources/js/composables/**", "./resources/js/helpers/**", "./resources/js/stores/**"],
			dts: "./auto-imports.d.ts",
			vueTemplate: true,
			eslintrc: {
				enabled: true,
				filepath: "./.eslintrc-auto-import.json",
				globalsPropValue: true,
			},
		}),
		laravel({
			input: ["resources/js/app.js"],
			ssr: "resources/js/ssr.js",
			refresh: true,
		}),
		InertiaI18n(),
		vue(),
		vuetify({
			styles: {
				configFile: "resources/js/setup/vuetify/settings.scss",
			},
		}),
	],
	server: {
		host: "192.168.0.42",
	},
});
