/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,svelte,js}"],
	theme: {
		extend: {
			colors: {
				cyberPurple: "#8A2BE2",
				neonBlue: "#00FFFF",
				lavender: "#E6E6FA",
				darkBg: "#121212",
				lightBg: "#F8F9FA",
			},
		},
	},
	plugins: [],
};
