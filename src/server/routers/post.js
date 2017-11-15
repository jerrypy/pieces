import post from '../controllers/post';

const router = require('koa-router')();

router
  .get('/', post.allPosts);

module.exports = router;
