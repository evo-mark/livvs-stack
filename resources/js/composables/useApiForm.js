import { cloneDeep, debounce, isEqual } from "es-toolkit";
import { isObject, transform } from "es-toolkit/compat";
import { refAutoReset } from "@vueuse/core";
import { useResolvedRoute } from "@adminui/inertia-routes";
import { computed, reactive, toValue, watch } from "vue";
import { router } from "@inertiajs/vue3";
import axios from "axios";

/**
 * Deep diff between two object, using es-toolkit
 * @param  {Object} object Object compared
 * @param  {Object} base   Object to compare with
 * @return {Object}        Return a new object who represent the diff
 */
function getDifferences(object, base) {
	function changes(object, base) {
		return transform(object, function (result, value, key) {
			if (!isEqual(value, base[key])) {
				result[key] = isObject(value) && isObject(base[key]) ? changes(value, base[key]) : value;
			}
		});
	}
	return changes(object, base);
}

export const useApiForm = (source, options = {}) => {
	const route = options.to ? useResolvedRoute(options.to) : (options.href ?? "");
	const debounceTime = options.debounce ?? 500;
	const recentTime = options.recent ?? 4000;
	const method = options.method ?? "PATCH";
	const reloadProps = options.reload ?? null;
	const additional = options.additional ?? {};

	const _internal = reactive(cloneDeep(source));
	const _internalCopy = computed(() => cloneDeep(_internal));
	const formErrors = ref({});
	const hasErrors = computed(() => Object.keys(formErrors.value)?.length > 0);
	const recentlyUpdated = refAutoReset(false, recentTime);
	const recentlyErrored = refAutoReset(false, recentTime);

	const handleAxiosError = (err) => {
		if (err.response) {
			formErrors.value = err.response.data.errors;
		}
		recentlyErrored.value = true;
	};

	const update = async (newValue, oldValue) => {
		let differences = newValue && oldValue ? getDifferences(newValue, oldValue) : newValue;
		differences = Object.assign(differences, additional);
		const data = /get/i.test(method) ? { params: differences } : { data: differences };
		const result = await axios({
			method,
			url: toValue(route),
			...data,
		}).catch(handleAxiosError);

		if (result) {
			recentlyUpdated.value = true;
			if (reloadProps) {
				router.reload({
					only: reloadProps,
					preserveScroll: true,
				});
			}
		}
	};
	const debouncedUpdate = debounce(update, debounceTime);

	const { stop, pause, resume } = watch(_internalCopy, debouncedUpdate);

	return {
		form: _internal,
		formErrors,
		hasErrors,
		stopFormUpdates: stop,
		pauseFormUpdates: pause,
		resumeFormUpdates: resume,
		recentlyUpdated,
		recentlyErrored,
		update,
	};
};
