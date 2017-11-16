/**
 * 整合所有子路由
 */
import home from './home';
import admin from './admin';
import post from './post';
import tag from './tag';

const router = require('koa-router')();

router
  .use('/', home.routes(), home.allowedMethods())
  .use('/post', post.routes(), post.allowedMethods())
  .use('/tag', tag.routes(), tag.allowedMethods())
  .use('/admin', admin.routes(), admin.allowedMethods());

module.exports = router;
