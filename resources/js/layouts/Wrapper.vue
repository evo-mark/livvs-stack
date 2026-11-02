<template>
	<VApp>
		<InertiaHead :title="`${$page.props.meta?.title}`" />
		<slot></slot>
		<EvoLayoutSnackbar />
	</VApp>
</template>

<script setup>
import { Head as InertiaHead } from "@inertiajs/vue3";
</script>
