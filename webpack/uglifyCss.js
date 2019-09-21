const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = new OptimizeCssAssetsPlugin({
	assetNameRegExp: /\.css$/g,
	cssProcessor: require('cssnano'),
	cssProcessorPluginOptions: {
		preset: ['default', { discardComments: { removeAll: true } }],
	},
	canPrint: true
});