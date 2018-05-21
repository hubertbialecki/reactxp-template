import * as webpack from 'webpack';
import * as path from 'path';

const config: webpack.Configuration = {
	mode: "development",
	entry: './src/index-web.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" }
		]
	},
};

export default config;
