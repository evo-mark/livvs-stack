import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import InertiaI18n from "inertia-i18n/vite";
import AutoImport from "unplugin-auto-import/vite";
import vuetify from "vite-plugin-vuetify";

export default async ({ mode }) => {
	const env = loadEnv(mode, process.cwd());
	const host = env.VITE_SERVER_HOST.replace("https://", "") ?? "127.0.0.1";

	return defineConfig({
		css: {
			preprocessorMaxWorkers: true,
			preprocessorOptions: {
				sass: {
					api: "modern-compiler",
				},
				scss: {
					api: "modern-compiler",
				},
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
						"@adminui/inertia-routes": ["useRoute"],
						"vue-i18n": ["useI18n"],
					},
				],
				dirs: ["./resources/js/composables/**", "./resources/js/helpers/**", "./resources/js/stores/**"],
				dts: "./auto-imports.d.ts",
				vueTemplate: true,
				eslintrc: {
					enabled: true,
					filepath: "./eslint-auto-import.json",
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
			host,
		},
	});
};
