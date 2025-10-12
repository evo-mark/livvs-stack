import { createVuetify } from "vuetify";
import defaults from "./defaults";
import { icons } from "./icons";
import theme from "./theme";
import LuxonAdapter from "@date-io/luxon";

export default createVuetify({
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
