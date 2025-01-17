import AutoImportJson from "./eslint-auto-import.json" with { type: "json" };
import configPrettier from "eslint-config-prettier";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import js from "@eslint/js";

export default [
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
			},
		},
		rules: {
			"vue/multi-word-component-names": "off",
			"vue/valid-v-slot": "off",
			"vue/no-v-html": "off",
		},
	},
];
