/** @type {import('tailwindcss').Config} */
/** @type {import('rippleui').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("rippleui")],
	rippleui: {
		themes: [
			{
				themeName: "dark",
				colorScheme: "dark",
				colors: {
					primary: "#573242",          
				},
			},
		],
	},
};
