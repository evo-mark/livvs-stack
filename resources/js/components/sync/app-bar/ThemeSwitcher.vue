<template>
	<VSwitch
		v-model="userPreferencesStore.theme"
		class="theme-switcher"
		inset
		density="compact"
		:color="userPreferencesStore.theme === 'light' ? 'yellow-500' : 'black'"
		false-value="dark"
		true-value="light"
	>
		<template #thumb="{ model }">
			<VIcon :key="model.value" size="18" :icon="model.value === 'light' ? mdiWeatherSunny : mdiWeatherNight" />
		</template>
	</VSwitch>
</template>

<script setup>
import { mdiWeatherNight, mdiWeatherSunny } from "@mdi/js";

const userPreferencesStore = useUserPreferencesStore();
</script>

<style>
.theme-switcher.v-switch--inset .v-switch__thumb {
	transform: none;
}
</style>
