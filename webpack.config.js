module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,         // Match both .js and .jsx files
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        "presets": [
          "es2015",
          "react",
          "stage-2"
        ],
        "plugins": [
          "transform-decorators-legacy"
        ]
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
  }
};