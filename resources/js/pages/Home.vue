<template>
	<div class="container text-center grow items-center flex flex-col h-full justify-center">
		<div><SvgIcon :path="mdiHome" size="48" /></div>
		<h1 class="text-2xl">This is the home page.</h1>
	</div>
</template>

<script setup>
import { mdiHome } from "@mdi/js";
</script>
