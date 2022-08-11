const paths = require('./paths');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
// const port = 3000;

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    // Stats bundle
    new BundleStatsWebpackPlugin(),
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: ['/css/main'],
      as(entry) {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.woff$/.test(entry)) return 'font';
        if (/\.js$/.test(entry)) return 'script';
        return 'script';
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(s?css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../' },
          },
          {
            loader: 'css-loader',
            options: { 
              sourceMap: true,
              importLoaders: 3,
              url: {
                filter: (url) => {
                  if (url.includes('charset=utf-8;;')) {
                    return false;
                  }
                  return true;
                },
              },
            },
          },
          'postcss-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  stats: {
    assets: true,
    entrypoints: true,
    chunks: true,
    modules: true,
    builtAt: true,
    hash: true,
  },

  optimization: {
    minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin()],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  // devServer: {
  //   client: {
  //     overlay: true,
  //     logging: 'warn',
  //   },
  //   devMiddleware: {
  //     stats: 'minimal',

  //   },
  //   static: {
  //     directory: paths.build,
  //   },
  //   historyApiFallback: true,
  //   open: false,
  //   compress: true,
  //   hot: true,
  //   port,
  // },
  
});
