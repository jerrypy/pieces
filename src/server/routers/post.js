import post from '../controllers/post';

const router = require('koa-router')();


// TODO 这里登录的路由变成可配置的
router.get('/', post.allPosts);

module.exports = router;
