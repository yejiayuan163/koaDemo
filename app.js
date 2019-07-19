const Koa = require('koa');
const app = new Koa();

const index = require('./routes/index');
app.use(index.routes(), index.allowedMethods())
app.listen(3000);
