module.exports = {
	test: /\.(png|jpg|gif|svg)$/i,
	exclude: [/\.inline\.svg$/],
	use: [
		{
			loader: 'file-loader',
			options: {
				// fallback: 'file-loader', //file-loader is default
				name: '[name].[ext]',
				outputPath: 'images/',
				publicPath: '../images/',
				limit: 18192
			},
		}
	]
}