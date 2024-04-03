/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	darkMode: "selector",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["Hubot Sans", "Inter", ...defaultTheme.fontFamily.sans],
		},
		screens: {
			xs: "475px",
			...defaultTheme.screens,
		},
		extend: {
			transitionTimingFunction: {
				"spring-1":
					"linear( 0, 0.006, 0.025 2.8%, 0.101 6.1%, 0.539 18.9%, 0.721 25.3%, 0.849 31.5%, 0.937 38.1%, 0.968 41.8%, 0.991 45.7%, 1.006 50.1%, 1.015 55%, 1.017 63.9%, 1.001 )",
				"spring-2":
					"linear( 0, 0.007, 0.029 2.2%, 0.118 4.7%, 0.625 14.4%, 0.826 19%, 0.902, 0.962, 1.008 26.1%, 1.041 28.7%, 1.064 32.1%, 1.07 36%, 1.061 40.5%, 1.015 53.4%, 0.999 61.6%, 0.995 71.2%, 1 )",
			},
			backgroundImage: {
				glass: "url('/glass.svg')",
			},
			textShadow: {
				xs: "0 1px 2px var(--tw-shadow-color)",
				sm: "0 2px 3px var(--tw-shadow-color)",
				DEFAULT: "0 .125rem 1rem var(--tw-shadow-color)",
				lg: "0 8px 16px var(--tw-shadow-color)",
			},
			boxShadow: {
				nice: `0 0 0 1px var(--tw-shadow-color),
                       0 4px 16px -4px var(--tw-shadow-color)`,
			},
			fontFamily: {
				hubot: ["Hubot Sans", "Inter", ...defaultTheme.fontFamily.sans],
			},
			dropShadow: {
				dark: [
					"0 1px 0px rgba(0, 0, 0, 0.2)",
					"0 -1px 0px rgba(0, 0, 0, 0.2)",
				],
				light: ["0 1px 0px white", "0 -1px 0px white"],
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant, matchUtilities, theme }) {
			addVariant("hocus", ["&:hover", "&:focus", "&:focus-visible"]),
				addVariant("group-hocus", [
					":merge(.group):hover &",
					":merge(.group):focus &",
					":merge(.group):focus-visible &",
				]),
				matchUtilities(
					{
						"text-shadow": (value) => ({
							textShadow: value,
						}),
					},
					{ values: theme("textShadow") },
				);
		}),
	],
};
