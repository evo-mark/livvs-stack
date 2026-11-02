<template>
	<Vue3Snackbar
		bottom
		groups
		dense
		shadow
		:limit="5"
		border="left"
		success="rgb(208, 252, 179)"
		info="rgb(169, 179, 206)"
		error="rgb(224, 96, 126)"
		warning="rgb(242, 243, 174)"
		message-class="!bg-zinc-950"
	/>
</template>

<script setup>
import { Vue3Snackbar, useSnackbar } from "vue3-snackbar";

const snackbar = useSnackbar();
const messages = computed(() => usePage().props.flash);

watch(
	messages,
	(v) => {
		for (const type in v) {
			if (v[type]) {
				setTimeout(() => {
					snackbar.add({
						type,
						title: v[type]?.title,
						text: v[type]?.text,
					});
				}, 100);
			}
		}
	},
	{
		immediate: true,
	},
);
</script>
