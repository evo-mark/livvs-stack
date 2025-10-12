<template>
	<VApp>
		<InertiaHead :title="`${$page.props.meta?.title}`" />
		<slot></slot>
	</VApp>
</template>

<script setup></script>
