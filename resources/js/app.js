import "vuetify/styles";
import "../css/app.css";
import "@fontsource/roboto";

import DefaultLayout from "layouts/DefaultLayout.vue";
import Wrapper from "layouts/Wrapper.vue";

import { createInertiaApp } from "@inertiajs/vue3";
import { registerPlugins } from "./setup";
import { inertiaRoutes, createInertiaPageResolver } from "@adminui/inertia-routes";
import { inertiaI18nVue } from "inertia-i18n/vue";

createInertiaApp({
	resolve: createInertiaPageResolver(import.meta.glob("./pages/**/*.vue", { eager: false }), {
		wrapper: Wrapper,
		default: DefaultLayout,
	}),
	withApp(app) {
		app.use(registerPlugins).use(inertiaRoutes).use(inertiaI18nVue);
	},
});
