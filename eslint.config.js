import AutoImportJson from "./eslint-auto-import.json" with { type: "json" };
import { defineConfig, globalIgnores } from 'eslint/config';
import configPrettier from "eslint-config-prettier";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
	globalIgnores(['vendor/', 'node_modules/', 'storage/', 'app/', 'public/', 'bootstrap/', 'routes/', 'database/']),
	{
		languageOptions: {
			...AutoImportJson,
		},
	},
	js.configs.recommended,
	...pluginVue.configs["flat/recommended"],
	configPrettier,
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.browser
			},
		},
		rules: {
			"vue/block-order": [
				"error",
				{
					order: ["template", "script", "style"],
				},
			],
			"vue/define-macros-order": [
				"error",
				{
					order: [
						"defineOptions",
						"defineEmits",
						"defineModel",
						"defineProps",
						"defineCustom",
						"defineSlots",
					],
					defineExposeLast: true,
				},
			],
			"vue/padding-line-between-blocks": "error",
			"vue/prefer-define-options": "error",
			"vue/prefer-use-template-ref": "error",
			"vue/v-for-delimiter-style": ["error", "in"],
			"vue/multi-word-component-names": "off",
			"vue/valid-v-slot": "off",
			"vue/no-v-html": "off",
		},
	},
]);
