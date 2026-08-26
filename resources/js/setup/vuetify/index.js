import LuxonAdapter from "@date-io/luxon";
import { createVuetify } from "vuetify";
import "vuetify/styles/core";
import defaults from "./defaults";
import { icons } from "./icons";
import theme from "./theme";

export default createVuetify({
	ssr: true,
	date: {
		adapter: LuxonAdapter,
		locale: {
			en: "en-GB",
		},
	},
	locale: {
		locale: "en",
	},
	defaults,
	icons,
	theme,
});
