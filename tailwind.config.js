/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			/* image background */
			backgroundImage: {
				'background-image': "url('assets/images/container_bg.png')",
			},
		},
	},
	plugins: [],
}
