const normalise = (d) => {
	if (d instanceof Date) return d;
	d = new Date(d);
	if (isNaN(d.getTime())) return new Date();
	return d;
};

export const shortDate = (d) => {
	d = normalise(d);
	return d.toLocaleDateString(undefined, {
		dateStyle: "long",
	});
};

export const shortDateTime = (d) => {
	d = normalise(d);
	return d.toLocaleString(undefined, {
		dateStyle: "long",
		timeStyle: "short",
	});
};

export const mediumDate = (d) => {
	d = normalise(d);
	return d.toLocaleDateString(undefined, {
		dateStyle: "medium",
	});
};

export const mediumDateTime = (d) => {
	d = normalise(d);
	return d.toLocaleString(undefined, {
		dateStyle: "medium",
		timeStyle: "short",
	});
};

export const longDate = (d) => {
	d = normalise(d);
	return d.toLocaleDateString(undefined, {
		dateStyle: "long",
	});
};

export const longDateTime = (d) => {
	d = normalise(d);
	return d.toLocaleString(undefined, {
		dateStyle: "long",
		timeStyle: "short",
	});
};
