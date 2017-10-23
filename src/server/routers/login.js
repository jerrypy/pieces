const router = require('koa-router')();

// TODO 这里登录的路由变成可配置的
router.get('/login', async(ctx, next) => {
    ctx.body = 'login page';
})

module.exports = router;