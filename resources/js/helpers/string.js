export const currency = (amount, currency = "GBP") => {
	const formatter = new Intl.NumberFormat(undefined, { style: "currency", currency });
	return formatter.format(amount);
};
