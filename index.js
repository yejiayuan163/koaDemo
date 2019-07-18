const Koa = require('koa')
// 创建一个Koa对象表示web app本身:
const app = new Koa()
// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
  // console.log(ctx) // 这是 Context
  // console.log(ctx.request) // 这是 koa Request
  // console.log(ctx.response) // 这是 koa Response
  await next()
})

app.use(async (ctx, next) => {
  if(ctx.url.match('getdata')){
    //匹配路径/getdata
    const query = ctx.query
    let cookies = 'jsb'
    if(ctx.cookies.get('fenlibao')){
      cookies = ctx.cookies.get('fenlibao') + '1'
    }
    ctx.cookies.set('fenlibao', cookies)//设置cookies
    ctx.body={fenlibao:`感谢${query.fenlibao}发来的请求！`}
    console.log('--------------------------------ctx.request------------------------')
    console.log(ctx.request)
    console.log('--------------------------------ctx.response-----------------------------')
    console.log(ctx.response)
  } else {
    //匹配路径/
    ctx.type = 'text/html'
    ctx.body = '<h1>Hello World!</h1><button onclick="getData()">点我</button><script>function getData() {return fetch("http://localhost:3000/getdata?fenlibao=技术部").then(function (response) {console.log(response);return response.json();})}</script>'
    console.log('--------------------------------ctx.request------------------------')
    console.log(ctx.request)
    console.log('--------------------------------ctx.response-----------------------------')
    console.log(ctx.response)
  }
})
// 在端口3000监听:
app.listen(3000)
