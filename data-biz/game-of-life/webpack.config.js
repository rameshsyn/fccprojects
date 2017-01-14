const { resolve } = require('path');
const config = {
	entry: './src/js',
	devtool: 'eval',
	output: {
		path: __dirname,
		filename: 'bundle.js',
		//publicPath: __dirname
	},
	devServer: {
		inline: true,
		port: 3000,
		contentBase: __dirname
	},
	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
			test: /(\.s?css)$/,
			loaders: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		},
		{
			test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=application/font-woff'
		},
		{
			test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=application/font-woff'
		},
		{
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=application/octet-stream'
		},
		{
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'file'
		},
		{
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=image/svg+xml'
		}
		]
	}
};

module.exports = config;