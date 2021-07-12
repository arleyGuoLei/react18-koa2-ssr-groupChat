import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import serverConfig from './webpack.server.config'
import clientConfig from './webpack.client.config'

webpack(serverConfig).watch({}, (err, stats) => {
  if (err || stats?.hasErrors()) {
    console.error(err || stats?.toJson('minimal'))
    return
  }
})

const clientCompiler: any = webpack(clientConfig)
const clientDevServer = new WebpackDevServer(
  clientCompiler,
  {
    port: 1997,
    hot: true,
    publicPath: '/client/',
    disableHostCheck: false,
    compress: true
  }
)

clientDevServer.listen(1997, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Webpack-dev-server listening at 1997`)
  }
})
