import { defineStore } from "pinia";
import { useTheme } from "vuetify";
import { usePreferredDark } from "@vueuse/core";

export const useUserPreferencesStore = defineStore(
	"userPreferences",
	() => {
		const vuetifyTheme = useTheme();
		const prefersDark = usePreferredDark();
		const theme = ref(!prefersDark.value ? "light" : "dark");

		watch(
			theme,
			(v) => {
				vuetifyTheme.global.name.value = v;
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
