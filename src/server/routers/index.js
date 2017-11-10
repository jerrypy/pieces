/**
 * 整合所有子路由
 */
import home from './home';
import admin from './admin';
import post from './post';

const router = require('koa-router')();

router.use('/', home.routes(), home.allowedMethods());
router.use('/post', post.routes(), post.allowedMethods());
router.use('/admin', admin.routes(), admin.allowedMethods());

module.exports = router;
