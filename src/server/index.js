import Koa from 'koa';
import koa_static from 'koa-static';
import views from 'koa-views';
import bodyparser from 'koa-bodyparser';
import cors from '@koa/cors';

import config from '../../config/default';
import db from './models';

const app = new Koa();

/**
 * 设置静态文件路径
 */
// app.use(koa_static(path.join(__dirname, '../../build')));
// app.use(views(path.join(__dirname, '../../views')), {
//   extension: 'html',
// });

app.use(cors());
app.use(bodyparser());

/**
 * 加载路由
 */
app.use(require('./routers').routes());


app.listen(config.app.port);

export default app;
