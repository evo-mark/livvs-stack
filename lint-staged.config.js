import "dotenv/config";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const csFixFile = (() => {
	let temp = resolve("vendor/bin/php-cs-fixer");
	if (existsSync(temp)) return temp;
	else return resolve("../../vendor/bin/php-cs-fixer");
})();

export default {
	"**/*.php": `${process.env.PHP ?? "env php"} ${csFixFile} fix --config=.php-cs-fixer.php`,
	"**/*.{js,ts,vue}": `eslint --fix`,
};
