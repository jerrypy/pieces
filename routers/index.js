const router = require('koa-router')();

router.get('/', async(ctx, next) => {
    ctx.body = "This is index.";
})

module.exports = router;