const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = new UglifyJsPlugin({
	test: /\.js(\?.*)?$/i,
	cache: true,
	parallel: true,
	sourceMap: false,
	extractComments: true
});