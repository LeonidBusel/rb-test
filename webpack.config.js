const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlMinifierPlugin = require('html-minifier-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const absolute_path = "http://localhost:9000";

const config = {
  context: `${__dirname}/app`,

  resolve: {
    alias: {
      components: path.resolve(__dirname, 'app/view/components'),
      containers: path.resolve(__dirname, 'app/view/containers'),
      elements: path.resolve(__dirname, 'app/view/elements'),
      consts: path.resolve(__dirname, 'app/consts'),
      fonts: path.resolve(__dirname, 'app/assets/fonts'),
      styles: path.resolve(__dirname, 'app/assets/styles'),
      img: path.resolve(__dirname, 'app/assets/img')
    }
  },

  entry: './index.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: absolute_path
  },

  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['-loader'],
    extensions: ['.js'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.(less|css)$/,
        loader: 'style!css!postcss!less',
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        loader: 'file',
        options: {
          publicPath: absolute_path,
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        options: {
          name: './assets/img/[name].[ext]',
          publicPath: absolute_path
        },
      },
    ],
  },

  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true,
          },
          output: {
            comments: false,
          },
          warnings: true,
        },
      }),
    ],
  },

  plugins: [
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],

  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    inline: true,
    open: true,
    port: 9000
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    config.plugins.push(new HtmlMinifierPlugin());
  }

  return config;
};
