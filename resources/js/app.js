import "vuetify/styles";
import "../css/app.css";
import "@fontsource/roboto";
import DefaultLayout from "layouts/DefaultLayout.vue";
import Wrapper from "layouts/Wrapper.vue";

import { createSSRApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { registerPlugins } from "./setup";
import { useInertiaRoutes, createInertiaPageResolver } from "@adminui/inertia-routes";
import useInertiaI18nVue from "inertia-i18n/vue";

createInertiaApp({
	resolve: createInertiaPageResolver(import.meta.glob("./pages/**/*.vue"), {
		errorClass: "flex justify-center items-center min-h-screen bg-slate-700 text-white text-2xl",
		errorTextClass: "px-2 font-bold",
		wrapper: Wrapper,
		default: DefaultLayout
	}),
	async setup({ el, App, props, plugin }) {
		const inertiaRoutesPlugin = useInertiaRoutes(props);
		const inertiaI18nPlugin = useInertiaI18nVue(props);

		await inertiaI18nPlugin.load();

		createSSRApp({ render: () => h(App, props) })
			.use(plugin)
			.use(registerPlugins)
			.use(inertiaRoutesPlugin)
			.use(inertiaI18nPlugin)
			.mount(el);
	},
});
