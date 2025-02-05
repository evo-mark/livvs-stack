export default {
	useTabs: true,
	tabWidth: 4,
	semi: true,
	printWidth: 120,
	proseWrap: "preserve",
	plugins: ["prettier-plugin-tailwindcss"],
	tailwindStylesheet: "./resources/css/app.postcss",
	tailwindFunctions: ["normalizeClass"],
};
