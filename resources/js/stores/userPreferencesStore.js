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
				vuetifyTheme.change(v);
				const isDark = v === 'dark';
				if (typeof window !== "undefined") {
					document.documentElement.classList.toggle('dark', isDark);
				}
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
