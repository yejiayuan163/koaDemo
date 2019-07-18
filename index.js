const Koa = require('koa')
// 创建一个Koa对象表示web app本身:
const app = new Koa()
// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => { //控制台打印请求时间
  let start = new Date()
  await next()
  console.log(new Date()-start+'ms')
})
app.use(async (ctx, next) => {
  console.log('>>step 1')
  await next()
  console.log('<<step 1')
})
app.use(async (ctx, next) => {
  console.log('>>step 2')
  await next()
  console.log('<<step 2')
})
app.use(async (ctx, next) => {
  console.log('>>step 3')
  await sleep(1000)
  await next()
  console.log('<<step 3')
})
app.use(async (ctx, next) => {
  ctx.body='<h1>hello world!!!</h1>'
})
// 在端口3000监听
app.listen(3000)

//用于模拟异步延时
const sleep = async (ms) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}
