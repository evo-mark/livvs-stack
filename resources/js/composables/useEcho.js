import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { usePage } from "@inertiajs/vue3";
window.Pusher = Pusher;

let echo;
const mock = new Proxy(
	{},
	{
		get(target, prop) {
			if (prop in target === false) {
				target[prop] = function () {
					return this;
				};
			}
			return target[prop];
		},
	},
);

/**
 * @returns { Echo } The Echo connection instance
 */
export function useEcho() {
	if (echo) return echo;
	else if (!usePage().props.ws.key) return mock;

	echo = new Echo({
		broadcaster: "pusher",
		key: usePage().props.ws.key,
		wsHost: usePage().props.ws.host,
		wssHost: usePage().props.ws.host,
		wsPort: usePage().props.ws.port,
		wssPort: usePage().props.ws.port,
		forceTLS: true,
		encrypted: true,
		disableStats: true,
		enabledTransports: ["ws", "wss"],
		cluster: "mt1",
	});

	return echo;
}
