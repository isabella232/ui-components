// @flow
import React from "react";
import { EDC, PIPELINE } from "@grail/lib";

export const COUNTRY_NAMES = [
  "Afghanistan",
  "Akrotiri",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Ashmore and Cartier Islands",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas, The",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Bassas da India",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burma",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Clipperton Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo, Democratic Republic of the",
  "Congo, Republic of the",
  "Cook Islands",
  "Coral Sea Islands",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Dhekelia",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Europa Island",
  "Falkland Islands (Islas Malvinas)",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern and Antarctic Lands",
  "Gabon",
  "Gambia, The",
  "Gaza Strip",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Glorioso Islands",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (Vatican City)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Jan Mayen",
  "Japan",
  "Jersey",
  "Jordan",
  "Juan de Nova Island",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia, Federated States of",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nauru",
  "Navassa Island",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paracel Islands",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn Islands",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Helena",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "Spain",
  "Spratly Islands",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tromelin Island",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States #1",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Virgin Islands",
  "Wake Island",
  "Wallis and Futuna",
  "West Bank",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export const COUNTRIES: Array<Object> = COUNTRY_NAMES.map(name => ({ label: name })).map(suggestion => ({
  label: suggestion.label,
  value: suggestion.label.toUpperCase().replace(" ", "_"),
}));

export const GRAIL = "https://grail.com/wp-content/uploads/2016/12/cropped-final-favicon-32x32.png";

export const EXAMPLE_TABLE_DATA = [
  { word: "Argle-bargle", origin: "Britain" },
  { word: "Dwaal", origin: "South Africa" },
  { word: "Floccinaucinihilipilification", origin: "General English" },
  { word: "Lollygag", origin: "North American" },
  { word: "Mouse Potato", origin: "General English" },
  { word: "Ogdoad", origin: "General English" },
  { word: "Sesquipedalian", origin: "General English" },
  { word: "Flibbertigibbet", origin: "Britain" },
  { word: "Curmudgeon", origin: "N/A" },
  { word: "Nudiustertian", origin: "Latin" },
  { word: "Tittynope", origin: "General English" },
  { word: "Pauciloquent", origin: "Britain" },
  { word: "Pneumonoultramicroscopicsilicovolcanoconiosis", origin: "General English" },
  { word: "Bijoux", origin: "Archaic" },
  { word: "Fartlek", origin: "Swedish" },
  { word: "Cruciverbalist", origin: "General English" },
  { word: "Erinaceous", origin: "General English" },
];

export const LARGE_EXAMPLE_TABLE_DATA = [];
for (let i = 0; i < 1000; i++) {
  // Create about 17,000 records.
  LARGE_EXAMPLE_TABLE_DATA.push(...EXAMPLE_TABLE_DATA);
}

export const EXTRA_LARGE_EXAMPLE_TABLE_DATA = [];
for (let i = 0; i < 100; i++) {
  // Create about 1,700,000 records
  EXTRA_LARGE_EXAMPLE_TABLE_DATA.push(...LARGE_EXAMPLE_TABLE_DATA);
}

export const ADAMS_DATA = [
  {
    date: "1848-02-23T16:20:00Z",
    content: <div>John Quincy Adams dies.</div>,
  },
  {
    date: "1818-04-10T12:00:00Z",
    content: (
      <div>
        John Quincy Adams tries to dig to the middle of the Earth to conduct trade with the people living there.
      </div>
    ),
  },
  {
    date: "1767-07-11T12:20:00Z",
    content: <div>John Quincy Adams is born.</div>,
  },
];

export const EMU_DATA = [
  {
    date: "1932-12-10T16:20:00Z",
    content: <div>War ends and is declared a victory for the emus.</div>,
  },
  {
    date: "1932-11-08T12:00:00Z",
    content: <div>Over 2500 rounds had been fired with the media claiming that only a few emus had been killed.</div>,
  },
  {
    date: "1932-11-02T12:20:00Z",
    content: <div>Sir George Pearce wages war on the local population of emus in Australia.</div>,
  },
];

export const ALPHABET_ANIMALS_DATA: Array<Array<?string>> = [
  ["alligator", "bat", "cat", "dog", "elephant", "fox"],
  ["goat", "horse", "iguana", "jaguar", "kangaroo", "lion"],
  ["monkey", "narwhal", "octopus", "penguin", "quail", "raccoon"],
  ["seal", "tiger", "umbrella bird", "vulture", "whale", "x-ray tetra"],
  ["yak", "zebra", null, null, null, null],
];

export const TEST_EXTERNAL_DOMAINS: Map<string, string> = new Map().set(EDC, "edc.com").set(PIPELINE, "pipeline.com");
