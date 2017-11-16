import tag from '../controllers/tag';

const router = require('koa-router')();

router
  .get('/:tagName', tag.tagPosts);

module.exports = router;
