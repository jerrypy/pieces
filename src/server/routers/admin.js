const router = require('koa-router')();
import admin from '../controllers/admin'

// TODO 这里登录的路由变成可配置的
router.post('/login', admin.login);
router.post('/logout', admin.logout);

module.exports = router;
