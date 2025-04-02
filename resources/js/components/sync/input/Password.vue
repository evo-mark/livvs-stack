<template>
	<VTextField
		v-model="modelValue"
		:label="label"
		placeholder="············"
		:type="show ? 'text' : 'password'"
		:append-inner-icon="show ? mdiEyeOff : mdiEye"
		:error-messages="error"
		@click:append-inner="show = !show"
	/>
</template>

<script setup>
import { mdiEye, mdiEyeOff } from "@mdi/js";

const { error, label } = defineProps({
	error: {
		type: [String, Array],
		default: null,
	},
	label: {
		type: String,
		default: "Password",
	},
});

const modelValue = defineModel({
	type: String,
	default: "",
});

const show = ref(false);
</script>
