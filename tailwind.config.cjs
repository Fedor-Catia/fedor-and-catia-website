/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateRows: {
				'7': 'repeat(7, minmax(0, 1fr))',
				'14': 'repeat(14, minmax(0, 1fr))',
			  },
			colors: {
				primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
			  },
			fontFamily: {
				fieldgothic: ['FieldGothic', 'sans-serif'],
			  },
		},
	},
	plugins: [],
}
