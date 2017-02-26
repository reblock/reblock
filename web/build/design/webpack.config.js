var path = require('path');
var webpack = require('webpack');

module.exports = env => {
	console.log(`Reblock ${env.mode == "admin" ? "Admin" : "App"} Hot Loader Started`)
	return {
		entry: [
			'react-hot-loader/patch',
			// activate HMR for React

			'webpack-dev-server/client?http://localhost:3000',
			// bundle the client for webpack-dev-server
			// and connect to the provided endpoint

			'webpack/hot/only-dev-server',
			// bundle the client for hot reloading
			// only- means to only hot reload for successful updates

			`./.debug/frontend/${env.mode=="admin" ? "admin":"app"}/client.js`,
			//`./.debug/frontend/admin/client.js`,
			// the entry point of our app
		],

		output: {
			filename: 'bundle.js',
			// the output bundle

			path: path.resolve(__dirname, './.debug/dist'),

			publicPath: '/static/'
			// necessary for HMR to know where to load the hot update chunks
		},

		devtool: 'inline-source-map',

		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			// enable HMR globally

			new webpack.NamedModulesPlugin(),
			// prints more readable module names in the browser console on HMR updates

			new webpack.NoEmitOnErrorsPlugin(),
			// do not emit compiled assets that include errors
		],

		devServer: {
			host: 'localhost',
			port: 3000,

			historyApiFallback: {
			rewrites: [
				{ from: "/css/style.css", to: "./static/css/style.css"},
				{ from: /^\//, to: "./build/design/index.html"},
			]
		},
			// respond to 404s with index.html

			hot: true,
			// enable HMR on the server
		},
	}
}