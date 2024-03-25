import { registerComponents } from "vue3-auto-vite-components";
import { vuetifyRoutesPlugin } from "inertiaRoutes";
import SvgIcon from "vue3-icon";
import vuetify from "./vuetify";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia({});
pinia.use(piniaPluginPersistedstate);

/**
 * General registration function
 */
export const registerPlugins = (app) => {
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
	app.use(vuetify);
	app.use(vuetifyRoutesPlugin);
	app.use(pinia);
	app.component("SvgIcon", SvgIcon);
};
