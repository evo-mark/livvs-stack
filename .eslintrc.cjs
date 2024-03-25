module.exports = {
	env: {
		node: true,
	},
	extends: ["./.eslintrc-auto-import.json", "eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
	rules: {
		// override/add rules settings here, such as:
		"vue/multi-word-component-names": "off",
		"vue/no-v-html": "off",
	},
};
