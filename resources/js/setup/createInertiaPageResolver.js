import DefaultLayout from "../layouts/DefaultLayout.vue";
import { h } from "vue";

/**
 * Takes a page glob and creates a function that can be
 * called by the Inertia render handler for page resolution
 *
 * @param { object } pages The page glob from `import.meta.glob`
 */
export const createInertiaPageResolver = (pages) => {
	return async function (name) {
		const resolvedPage = pages[`./pages/${name}.vue`];

		if (!resolvedPage) {
			return h(
				"div",
				{
					class: "flex justify-center items-center min-h-screen bg-slate-700 text-white text-2xl",
				},
				[h("span", "Unable to find page: "), h("span", { class: "px-2 font-bold" }, name)],
			);
		}

		const page = typeof resolvedPage === "function" ? await resolvedPage() : resolvedPage;

		page.default.layout = page.default.layout ?? DefaultLayout;
		return page;
	};
};
