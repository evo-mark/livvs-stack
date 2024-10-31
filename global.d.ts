import type { route } from "./vendor/tightenco/ziggy/src/js/index.d.ts";

declare module "vue" {
	interface ComponentCustomProperties {
		$route: typeof route;
	}
}
