const router = require('koa-router')();

// TODO 这里登录的路由变成可配置的
router.get('/login', async(ctx, next) => {
    await ctx.render('login');
})

module.exports = router;