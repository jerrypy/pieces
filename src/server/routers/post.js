import post from '../controllers/post';

const router = require('koa-router')();

router
  .get('/', post.allPosts)
  .get('/:custom_link', post.singlePost);

module.exports = router;
