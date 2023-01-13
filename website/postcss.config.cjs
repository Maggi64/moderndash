const tailwindcss = require("tailwindcss");
const tailwindNesting = require('@tailwindcss/nesting');

const config = {
  plugins: [
    tailwindNesting(),
    tailwindcss(),
    // autoprefixer,
  ],
};

module.exports = config;
