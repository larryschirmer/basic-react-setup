const path = require('path');
let webpack = require('webpack');

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react'],
				},
			},
			{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
};
