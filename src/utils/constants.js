// @flow
export const COUNTRIES: Array<Object> = [
	{ label: "Afghanistan" },
	{ label: "Aland Islands" },
	{ label: "Albania" },
	{ label: "Algeria" },
	{ label: "American Samoa" },
	{ label: "Andorra" },
	{ label: "Angola" },
	{ label: "Anguilla" },
	{ label: "Antarctica" },
	{ label: "Argentina" },
	{ label: "Armenia" },
	{ label: "Aruba" },
	{ label: "Australia" },
	{ label: "Austria" },
	{ label: "Azerbaijan" },
	{ label: "Bahamas" },
	{ label: "Bahrain" },
	{ label: "Bangladesh" },
	{ label: "Barbados" },
	{ label: "Belarus" },
	{ label: "Belgium" },
	{ label: "Belize" },
	{ label: "Benin" },
	{ label: "Bermuda" },
	{ label: "Bhutan" },
].map(suggestion => ({
	value: suggestion.label,
	label: suggestion.label,
}));