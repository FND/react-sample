/*eslint-env node */
"use strict";

let path = require("path");

module.exports = {
	entry: "./index.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	resolve: {
		root: path.resolve("./node_modules"),
		extensions: ["", ".js", ".jsx"]
	},
	module: {
		loaders: [{
			loader: "babel-loader",
			query: {
				presets: ["es2015", "react"],
				cacheDirectory: true
			}
		}]
	}
};
