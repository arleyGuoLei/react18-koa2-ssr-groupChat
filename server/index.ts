import Koa from 'koa'

import renderToString from '@server/utils/renderToString'

const app = new Koa()

app.use(async ctx => {
  ctx.respond = false
  ctx.status = 200

  const htmlStream = renderToString()

  const before = `
        <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            
          </head>
          <body><div id="app">`

  ctx.res.write(before)
  htmlStream.pipe(ctx.res, { end: false })

  htmlStream.on('end', () => {
    const after = `</div>
        <script type="text/javascript">window.__INITIAL_DATA__ = ${JSON.stringify({})}</script>
        </body>
      </html>`
    ctx.res.write(after)
    ctx.res.end()
  })
})

app.listen(3000)
