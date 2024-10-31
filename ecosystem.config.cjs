require("dotenv").config();

const isProduction = process.env.APP_ENV === "production";

module.exports = {
	apps: [
		/* {
			name: "Octane",
			script: "artisan",
			interpreter: "php",
			args: `octane:start --no-interaction --host=127.0.0.1 --port 9000 ${isProduction ? "--workers=4" : "--workers=2 --watch"}`,
			exec_mode: "fork",
		}, */
		{
			name: "Queue",
			script: "artisan",
			interpreter: "php",
			args: `${isProduction ? "queue:work" : "queue:listen"} --tries=3 --backoff=3`,
			exec_mode: "fork",
		},
	],
};
