const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ShakePlugin = require('webpack-common-shake').Plugin;
const webpack = require('webpack');
const WebpackStrip = require('webpack-strip');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: './',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['babel-loader', WebpackStrip.loader('debug', 'console.log', 'console.warn')],
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        'sass-loader',
      ],
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader',
      }),
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loaders: ['file-loader', 'image-webpack-loader'],
    }, {
      test: /\.(ttf|eot|woff|woff2)$/,
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]',
      },
    },
    ],
  },
  plugins: [

    // Include all scripts to html as diferent script tags.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),

    new ExtractTextPlugin('styles.css'),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),

    // Create visualization of javascript files used in project.
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),

    new webpack.DefinePlugin({
      __ROOT_URL__: JSON.stringify("http://localhost:8080/"),
    }),

    new ShakePlugin(),

    new LodashModuleReplacementPlugin({
      shorthands: true,
    }),

  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
