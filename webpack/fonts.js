module.exports = {
	test: /\.(woff2?|ttf|otf|eot)$/,
	exclude: /node_modules/,
	use: {
		loader: 'file-loader',
		options: {
				name: '[name].[ext]',
				outputPath: 'fonts/',
				publicPath: '../fonts/',
		}
	}
}