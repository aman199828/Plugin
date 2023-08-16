const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
  entry:{ App:'./src/App.tsx',},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].index.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx','.json', '.mjs'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader:'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-jsx'],
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'] 
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
      
    ],
   
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },  
};