import "vuetify/styles";
import "../css/app.postcss";

import { createSSRApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { registerPlugins, createInertiaPageResolver } from "./setup";
import { useInertiaRoutes } from "@adminui/inertia-routes";
import useInertiaI18nVue from "inertia-i18n/vue";

createInertiaApp({
	resolve: createInertiaPageResolver(import.meta.glob("./pages/**/*.vue")),
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
