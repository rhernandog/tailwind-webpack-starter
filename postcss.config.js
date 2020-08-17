module.exports = {
  plugins: [
    require("postcss-import"),
    require('tailwindcss'),
    require("postcss-nested"),
    require('autoprefixer'),
    require("@fullhuman/postcss-purgecss")({
      content: [
        "./src/**/*.html",
        "./src/**/*.css",
      ],
      defaultExtracor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
  ]
};
