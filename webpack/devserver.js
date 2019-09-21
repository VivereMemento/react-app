module.exports = {
	devServer: {
		https: true,
		publicPath: '/',
		historyApiFallback: true,
		stats: 'errors-only',
		disableHostCheck: true,
		host: '0.0.0.0',
		port: 9002,
		proxy: [{
			path: '/api/v1.0/',
			target: 'https//stage.bodyfitplan.xyz',
		}]
	}
}