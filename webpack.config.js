const path = require('path');
const generateAssetManifest = require('./generate_asset_manifest');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  plugins: [
    {
      apply: (compiler) => {
        compiler.hooks.compile.tap('GenerateAssetManifest', () => generateAssetManifest())
      }
    }
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],

  },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    host: '0.0.0.0'
  },
};
