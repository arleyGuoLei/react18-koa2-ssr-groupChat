import * as webpack from 'webpack'
import * as path from 'path'

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const resolve = (filepath: string) => (path.resolve(__dirname, filepath))

export default (target: 'server' | 'client') => {
  const isClient = target === 'client'

  const config: webpack.Configuration = {
    mode: isDev ? 'development' : 'production',
    plugins: [
      new CleanWebpackPlugin()
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: [
              isClient && isDev && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          },
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      alias: {
        '@server': resolve('./../server'),
        '@client': resolve('./../client')
      },
      extensions: ['.tsx', '.ts', '.js']
    }
  }

  return config
}
