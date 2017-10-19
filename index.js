const Koa = require('koa');
const config = require('./config/default.js')
const render = require('koa-ejs');
const path = require('path');


const app = new Koa();
render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'login',
    viewExt: 'ejs',
    cache: false,
    debug: true
});

app.use(require('./routers/index.js').routes());
app.use(require('./routers/login.js').routes());

app.listen(3000);