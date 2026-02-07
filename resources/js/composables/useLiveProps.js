import { router } from "@inertiajs/vue3";

/**
 * Live props enables a reload of an Inertia page prop to be triggered from the backend
 * via the webhooks broadcast function
 *
 * @example
 * const echo = useEcho();
 * useLiveProps(echo);
 * @param { object } broadcaster The Laravel Echo instance for receiving broadcasts
 * @returns { void }
 */
export const useLiveProps = (broadcaster) => {
	if (broadcaster) {
		broadcaster.channel(`inertia-update`).listen("PropUpdate", ({ key, data = {}, component }) => {
			const currentComponent = usePage().component;

			component = Array.isArray(component) === false ? [component] : component;
			const isMatch = component?.length && component.some(item => {
				const matchString = () => item === currentComponent;
				// Check if a valid regex
				if (item.startsWith('/')) {
					const match = item.match(/^\/(.+)\/([a-z]*)$/i);
					if (!match) return matchString();
					
					const regex = new RegExp(match[1], match[2]);
					return regex.test(currentComponent);
				} 
				// Otherwise treat as a string
				else return matchString();
			})
			if (isMatch === false) return;

			key = Array.isArray(key) ? key : [];
			router.reload({
				preserveUrl: true,
				only: key,
				data,
			});
		});
	}
};
