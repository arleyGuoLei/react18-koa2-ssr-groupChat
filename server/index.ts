import Koa from 'koa'

import renderToString from '@server/utils/renderToString'

const app = new Koa()

app.use(async ctx => {
  ctx.body = renderToString()
})

app.listen(3000)
