<template>
	<div
		class="evo-setting grid gap-x-4"
		:class="{
			'is-dense gap-y-2': dense,
			'gap-y-4': !dense,
		}"
	>
		<div class="evo-setting__title font-display uppercase">
			<slot name="title">{{ title }}</slot>
		</div>
		<div class="evo-setting__description pb-2 text-sm opacity-80">
			<slot name="description">
				{{ description }}
			</slot>
		</div>
		<div class="evo-setting__content pb-2">
			<slot></slot>
		</div>
	</div>
</template>

<script setup>
const { dense, title, description } = defineProps({
	dense: {
		type: Boolean,
		default: false,
	},
	title: {
		type: String,
		default: "",
	},
	description: {
		type: String,
		default: "",
	},
});
</script>

<style>
.evo-setting {
	grid-template-columns: 1fr 2fr;
	grid-template-rows: auto 1fr;

	grid-template-areas:
		"title title"
		"description content";

	&.is-dense {
		grid-template-areas:
			"title content"
			"description content";
	}
}

.evo-setting__title {
	grid-area: title;
}
.evo-setting__description {
	grid-area: description;
}
.evo-setting__content {
	grid-area: content;
}
</style>
