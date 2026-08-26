import { usePreferredDark } from "@vueuse/core";
import { defineStore } from "pinia";
import { useTheme } from "vuetify";

export const useUserPreferencesStore = defineStore(
	"userPreferences",
	() => {
		const vuetifyTheme = useTheme();
		const prefersDark = usePreferredDark();
		const theme = ref(!prefersDark.value ? "light" : "dark");

		watch(
			theme,
			(v) => {
				vuetifyTheme.change(v);
			},
			{
				immediate: true,
			},
		);

		return { theme };
	},
	{
		persist: true,
	},
);
