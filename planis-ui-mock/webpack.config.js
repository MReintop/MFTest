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
    port: 3000,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: 'auto',
    },
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
      name: 'PlansUI',
      filename: 'remoteEntry.js',
      exposes: {
        './PlanningGeneralDataSection':
          './src/features/planningDataFeatures/planningGeneralDataSection/PlanningGeneraDataSection.js',
        './PlanningAreaSection':
          './src/features/planningAreaFeatures/planningAreaSection/PlanningAreaSection',
        './planningModuleEvents': './src/store/planningModuleEvents',
      },
      remotes: {
        container: 'DocuUI@http://localhost:3001/remoteEntry.js',
      },
      shared: [
        {
          react: {
            eager: true,
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            eager: true,
            singleton: true,
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
