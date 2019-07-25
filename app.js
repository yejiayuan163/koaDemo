const Koa = require('koa');
const app = new Koa();
const index = require('./routes/index');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const static = require('koa-static');
const views = require('koa-views')
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))
app.use(bodyParser({
  enableTypes:['json', 'form', 'text']
}))
app.use(static(
    __dirname + '/public'
))
app.keys = ['1233211234567'];
const CONFIG = {
  key: 'FLB-SESSION', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};


app.use(session(CONFIG, app));
app.use(async (ctx,next) => {
  // ignore favicon
  if (ctx.path === '/favicon.ico') return;
  let n = ctx.session.views || 0;
  ctx.session.views = ++n;
  ctx.session.token = ctx.session.token ? ctx.session.token : 'FLBNB'
  console.log('ctx.session:', ctx.session)
  await next()
});
app.use(index.routes(), index.allowedMethods())

app.listen(3000);
