import { vuetifyRoutesPlugin } from "@adminui/inertia-routes";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { registerComponents } from "vue3-auto-vite-components";
import SvgIcon from "vue3-icon";
import vuetify from "./vuetify";
import { SnackbarService } from "vue3-snackbar";
import "vue3-snackbar/styles";
import { Link } from "@inertiajs/vue3";

/**
 * General registration function
 */
export const registerPlugins = (app, { ssr }) => {
	const pinia = createPinia({});
	if (!ssr) {
		pinia.use(piniaPluginPersistedstate);
	}
	app.use(registerComponents, {
		namespace: "Evo",
		resolveIndex: true,
		sync: import.meta.glob("../components/sync/**/*.{vue,js}", {
			eager: true,
		}),
		async: import.meta.glob("../components/async/**/*.{vue,js}"),
		asyncLoading: import.meta.glob("../components/async/**/*Loading.{vue,js}", {
			eager: true,
		}),
	});
	app.use(SnackbarService);
	app.use(vuetify);
	app.use(vuetifyRoutesPlugin);
	app.use(pinia);
	app.component("SvgIcon", SvgIcon);
	app.component("InertiaLink", Link);
};
