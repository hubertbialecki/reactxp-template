import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
	mode: "development",
	entry: './src/index-web.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/dist'),
  },

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.css'],
  },

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" }
		]
	},
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 4000,
    historyApiFallback: true,
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
	]
};

export default config;
