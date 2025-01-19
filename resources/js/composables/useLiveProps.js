import { router } from "@inertiajs/vue3";

/**
 * 
 * @param { object } broadcaster The Laravel Echo instance for receiving broadcasts
 */
export const useLiveProps = (broadcaster) => {
	if (broadcaster) {
		broadcaster.channel(`inertia-update`).listen("PropUpdate", ({ key, data = {}, component }) => {
			const currentComponent = usePage().component;
			if (component && component !== currentComponent) return;

			key = Array.isArray(key) ? key : [];
			router.reload({
				preserveUrl: true,
				only: key,
				data,
			});
		});
	}
};
