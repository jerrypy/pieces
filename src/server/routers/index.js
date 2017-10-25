/**
 * 整合所有子路由
 */

const router = require('koa-router')();

import home from './home';
import admin from './admin';

router.use('/', home.routes(), home.allowedMethods());
router.use('/admin', admin.routes(), admin.allowedMethods());

module.exports = router;
