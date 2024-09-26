/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"light-bg":"#fcf6e8",
				"dark-bg":"#dbcfc3",
				"light-purple":"#dac2cf",
				greenish:"#d3e3d6",
				oranji:"#fdbc96",
				redish:"#efc4b9"
			  },
			  boxShadow: {
				'realistic-solid': '11px 11px 0px 0px rgba(0, 0, 0, 1)', // X, Y, Blur, Spread, Color
			  }
		},
	},
	plugins: [],
}
