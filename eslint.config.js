import AutoImportJson from "./eslint-auto-import.json" with { type: "json" };
import { defineConfig, globalIgnores } from 'eslint/config';
import evoMarkConfig from "@evomark/eslint-config";

export default defineConfig([
	globalIgnores(['vendor/', 'node_modules/', 'storage/', 'app/', 'public/', 'bootstrap/', 'routes/', 'database/']),
	{
		extends: [evoMarkConfig],
		languageOptions: {
			...AutoImportJson,
		},
	},
]);
