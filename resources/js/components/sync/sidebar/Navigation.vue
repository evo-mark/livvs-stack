<template>
	<VList nav>
		<VListItem title="Testing One" :prepend-icon="mdiAccount"></VListItem>
		<VListItem title="Testing Two" :prepend-icon="mdiAccount"></VListItem>
		<VListItem title="Testing Three" :prepend-icon="mdiAccount"></VListItem>
		<VListItem title="Testing Four" :prepend-icon="mdiAccount"></VListItem>
	</VList>
</template>

<script setup>
import { mdiAccount } from "@mdi/js";
</script>
