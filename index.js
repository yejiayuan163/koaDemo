// const koa = require('koa');
// const app = new koa();
// app.use(async function (ctx,next){
//   console.log('>> one');
//   await next();
//   console.log('<< one');
// });
//
// app.use(async function (ctx,next){
//   console.log('>> two');
//   await next();
//   console.log('<< two');
// });
//
// app.use(async function (ctx,next){
//   console.log('>> three');
//   await next();
//   console.log('<< three');
// });
// app.use(async function (ctx){
//   console.log('>> Hello World');
//   console.log('>>',ctx.url);
//   ctx.body = 'Hello World';
// });
//
// app.listen(5427);
//

const Koa = require('koa');
// 创建一个Koa对象表示web app本身:
const app = new Koa();
// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
  await next();
  ctx.type = 'text/html';
  ctx.body = '<h1>Hello World!</h1>';
});
// 在端口3000监听:
app.listen(3000);
console.log('listening in 3000')
