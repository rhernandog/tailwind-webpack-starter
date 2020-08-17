# TailwindCSS & Webpack Startup

### Description

Simple example of setting up TailwindCSS with Webpack and PostCSS config to generate a simple flex container and a login form.

### Usage

Download the ZIP file and install the dependencies:
```
$ npm install
```

For a live sample run:
```
$ npm start
```
For creating a production build:
```
$ npm run build
```

### Configuration

The particular configuration for Tailwind can be found in `tailwind.config.js`. In this file the additions are `purge: false` (purge is configured in the postcss config file) and a set of box shadows for some elements in the sample.

The PostCSS configuration included in the `postcss.config.js` file basically creates an approximation to a SASS/SCSS workflow for creating a CSS output. It uses [postcss-import](https://github.com/postcss/postcss-import) and [postcss-nested](https://github.com/postcss/postcss-nested) for that. The CSS Purge is also configured in this file using [@fullhuman/purgecss](https://github.com/FullHuman/purgecss).

There is a `full.config.js` file, which is the default Tailwind configs, in order to check them and compare it with the extended ones in the `tailwind.config.js` file.

There is a `stylelint.config.js` file for configuration with stylelint if you're using VSCode. Also it is recommended to install the `language-postcss` extension (from Li Chen), as well as  the stylelint extentions from Styelint.

The development and production webpack configs are in the `webpack.config.js` and `webpack.prod.js`

### License
MIT

### Author
- Rodrigo Hernando G.
- Twitter [@websnapcl](https://twitter.com/websnapcl/)
