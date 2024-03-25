<template>
	<VSwitch
		v-model="userPreferencesStore.theme"
		class="theme-switcher"
		inset
		density="compact"
		:color="userPreferencesStore.theme === 'light' ? 'yellow-darken-3' : 'black'"
		false-value="dark"
		true-value="light"
	>
		<template #thumb="{ model }">
			<VIcon
				:key="model.value"
				size="18"
				:icon="model.value === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
			/>
		</template>
	</VSwitch>
</template>

<script setup>
const userPreferencesStore = useUserPreferencesStore();
</script>

<style lang="postcss">
.theme-switcher.v-switch--inset .v-switch__thumb {
	transform: none;
}
</style>
