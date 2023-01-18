const disabledCss = {
	'code::before': false,
	'code::after': false,
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: { css: disabledCss }
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
