import Koa from 'koa';
import koa_static from 'koa-static';
import views from 'koa-views';
import path from 'path';
import config from '../../config/default';


const app = new Koa();


app.use(koa_static(path.join(__dirname, '../../build')));
app.use(views(path.join(__dirname, '../../views')), {
    extension: 'html'
});
app.use(require('./routers/index.js').routes());
app.use(require('./routers/login.js').routes());

app.listen(3000);

export default app;