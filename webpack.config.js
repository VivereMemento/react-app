const path = require('path');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('./webpack/uglifyJs');
const OptimizeCssAssetsPlugin = require('./webpack/uglifyCss');
const pug = require('./webpack/pug');
const babel = require('./webpack/babel');
const css = require('./webpack/css');
const image = require('./webpack/image');
const svgReact = require('./webpack/svg-react');
const fonts = require('./webpack/fonts');

const PATHS = {
	source: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'dist')
};

const common = env => {
	return merge([
		{
			entry: {
				'index': ['@babel/polyfill', `${PATHS.source}/pages/index/index.js`],
			},
			optimization: {
				splitChunks: {
						cacheGroups: {
							default: false,
							vendors: false,
							// vendor chunk
							vendor: {
								name: 'common',
								// sync + async chunks
								chunks: 'all',
								// import file path containing node_modules
								test: /node_modules/
							}
						}
				}
			},
			output: {
				path: PATHS.build,
				filename: 'js/[name].js',
				chunkFilename: 'js/[name].js',
				publicPath: '/',
			},
			devtool: 'source-map',
			mode: env,
			module: {
				rules: [
					babel,
					svgReact,
					pug,
					css(env),
					image,
					fonts
				]
			},
			plugins: [
				new HtmlWebpackPlugin({
					filename: 'index.html',
					chunks: ['index', 'common'],
					template: `${PATHS.source}/pages/index/index.pug`
				}),
				new MiniCssExtractPlugin({
					filename: env === 'production' ? './css/[name].css' : './css/[name].[hash].css'
				})
			]
		}
	]);
}

module.exports = function(env) {
	if (env === 'production') {
		return merge([
			common(env),
			{
				output: {
					publicPath: "/",
				}
			},
			{
				plugins: [
					// UglifyJsPlugin,
					OptimizeCssAssetsPlugin
				]
			},
		])
	}
	if (env === 'development') {
		return merge([
			common(env),
			devserver,
		])
	}
};