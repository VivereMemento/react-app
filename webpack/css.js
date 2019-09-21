const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = isDev => ({
	test: /\.(sa|sc|c)ss$/,
	use: [
		isDev === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
		{
			loader: 'css-loader',
			options: {
				importLoaders: 1,
				sourceMap: true,
				// modules: true,
			}
		},
		{
			loader: 'px-to-rem-loader',
			options: {
				dpr: 1,
				rem: 15,
				exclude: ['background-size']
			}
		},
		{
			loader: 'postcss-loader',
			options: {
				ident: 'postcss',
				plugins: (loader) => [
					require('autoprefixer')()
				]
			}
		},
		'sass-loader'
	]
});