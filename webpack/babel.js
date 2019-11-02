module.exports = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: [
		{
			loader: 'babel-loader',
			options: {
				presets: [
					[
						'@babel/preset-react',
						{
							throwIfNamespace: false // defaults to true
						}
					],
					[
						'@babel/preset-env',
						{
							useBuiltIns: 'entry',
							corejs: '3.0.0',
							targets: {
								chrome: 67,
								ie: 11,
								browsers: ['last 2 versions', 'safari 7']
							}
						}
					]
				],
				plugins: [
					'@babel/plugin-proposal-object-rest-spread',
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-proposal-decorators', { legacy: true }],
					['@babel/plugin-proposal-class-properties', { loose: false }],
					['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
					'@babel/plugin-proposal-optional-chaining'
				]
			}
		},
		'eslint-loader'
	]
};
