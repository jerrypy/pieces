import admin from '../controllers/admin';

const router = require('koa-router')();


// TODO 这里登录的路由变成可配置的
router.post('/login', admin.login);
router.post('/logout', admin.logout);

module.exports = router;
