module.exports = {
	devServer: {
		https: true,
		publicPath: '/',
		historyApiFallback: true,
		stats: 'errors-only',
		disableHostCheck: true,
		port: 9002,
		proxy: [{
			path: '/api/v1.0/',
			target: 'https//stage.bodyfitplan.xyz',
		}]
	}
}