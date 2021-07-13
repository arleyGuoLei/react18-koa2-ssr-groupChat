import Koa from 'koa'

import * as path from 'path'

// import koaStatic from 'koa-static'

import render from '@server/utils/render'

const app = new Koa()

// const staticPath = path.join(__dirname, './../client/')
// app.use(koaStatic(staticPath))

app.use(async ctx => {
  ctx.body = render()
})

app.listen(3000)
