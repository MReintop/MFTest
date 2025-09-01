const HtmlWebPackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html',
});
module.exports = {
  mode: 'development',
  output: {
    publicPath: 'auto',
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
    static: path.join(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
      },
    ],
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: 'DocuUI',
      filename: 'remoteEntry.js',
      remotes: {
        PlansUI: 'PlansUI@http://localhost:3000/remoteEntry.js',
      },
      exposes: {
        './DocPage': './src/pages/docPage/DocPage',
        './ProceedingPage': './src/pages/proceedingPage/ProceedingPage',
        './moduleInitializer': './src/events/moduleInitializer',
      },
      shared: [
        {
          react: {
            eager: true,
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-dom'],
          },
          'react-router-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-router-dom'],
          },
          '@material-ui/core': {
            singleton: true,
            requiredVersion: deps['@material-ui/core'],
          },
          'react-redux': {
            singleton: false,
            requiredVersion: deps['react-router-dom'],
          },
        },
      ],
    }),
  ],
};
