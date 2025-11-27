import { router, usePage } from "@inertiajs/vue3";
import { shallowRef } from "vue";

const countries = shallowRef([]);
let promise;
export const useCountries = () => {
	if (!promise) {
		promise = new Promise((resolve, reject) => {
			router.reload({
				only: ["countries"],
				onError: reject,
				onSuccess: () => {
					countries.value = usePage().props.countries;
					resolve();
				},
			});
		});
	}

	return countries;
};