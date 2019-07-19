const Koa = require('koa');
const app = new Koa();
app.use(async ctx => {
  let _html = '404 NotFound'
  switch (ctx.url) {
    case '/':
      _html = '<div><a href="/">Index</a>&nbsp;&nbsp;&nbsp;<a href="/about">About</a>&nbsp;&nbsp;&nbsp;<a href="/world">World</a></div><h1>Index</h1>';
      break;
    case '/about':
      _html = '<div><a href="/">Index</a>&nbsp;&nbsp;&nbsp;<a href="/about">About</a>&nbsp;&nbsp;&nbsp;<a href="/world">World</a></div><h1>About</h1>';
      break;
    case '/world':
      _html = '<div><a href="/">Index</a>&nbsp;&nbsp;&nbsp;<a href="/about">About</a>&nbsp;&nbsp;&nbsp;<a href="/world">World</a></div><h1>World</h1>';
      break;
    default:
      break;
  }
  ctx.body = _html;
});
app.listen(3000);
