/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backdropBlur: {
				sm: '4px',
			},
			screens: {
				xs: '360px', // Custom breakpoint for screens below or equal to 360px
			},
		},
	},
	plugins: [],
}
