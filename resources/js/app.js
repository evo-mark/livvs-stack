import "@fontsource/roboto";

import DefaultLayout from "layouts/DefaultLayout.vue";
import Wrapper from "layouts/Wrapper.vue";

import { createInertiaPageResolver, inertiaRoutes } from "@adminui/inertia-routes";
import { createInertiaApp } from "@inertiajs/vue3";
import { inertiaI18nVue } from "inertia-i18n/vue";
import { registerPlugins } from "./setup";

createInertiaApp({
	resolve: createInertiaPageResolver(import.meta.glob("./pages/**/*.vue", { eager: false }), {
		wrapper: Wrapper,
		default: DefaultLayout,
	}),
	withApp(app, { ssr }) {
		app.use(registerPlugins, { ssr }).use(inertiaRoutes).use(inertiaI18nVue);
	},
});
