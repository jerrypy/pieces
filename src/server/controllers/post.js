import db from '../models';

/**
 * Fetch all posts based on type param
 * @param {*} ctx koa requests context
 */
const allPosts = async (ctx) => {
  let postType = 'post';
  if ('type' in ctx.query) {
    postType = ctx.query.type;
  }

  if (postType === 'post') {
    const posts = await db.post.scope('normalPost').findAll({
      attributes: ['id', 'title', 'custom_link', 'updated_at'],
      include: [{
        model: db.tag,
        attributes: ['id', 'name'],
      }, {
        model: db.user,
        attributes: ['id', 'username'],
      }],
      // 按更新时间倒序返回
      order: [['updated_at', 'DESC']],
      // 这个需要model定义的时候,option里paranoid设置为true
      // If true, only non-deleted records will be returned.
      // If false, both deleted and non-deleted records will
      // be returned. Only applies if options.paranoid is true for the model.
      paranoid: true,
    });
    const res = posts.map((originPost) => {
      // 使用toJSON()获取原始数据，否则返回的是meta数据
      // 包含很多额外信息
      const post = originPost.toJSON();

      // timestamp返回的是一个datetime对象
      const date = post.updated_at;
      return {
        postId: post.id,
        postTitle: post.title,
        customLink: post.custom_link,
        postDate: { month: date.getMonth() + 1, day: date.getDate(), year: date.getFullYear() },
        postTags: post.tags.map(tag => ({ id: tag.id, name: tag.name })),

        // Notice that the accessor (the User property in the resulting instance)
        // is singular because the association is one-to-something.
        postAuthor: post.user,
      };
    });

    ctx.body = JSON.stringify(res);
  } else if (postType === 'roar') {
    const roars = await db.post.scope('roarPost').findAll({
      attributes: ['id', 'content', 'updated_at'],
      order: [['updated_at', 'DESC']],
    });

    const res = roars.map((originRoar) => {
      const roar = originRoar.toJSON();
      return roar;
    });

    ctx.body = JSON.stringify(res);
  } else {
    ctx.body = JSON.stringify({
      status: 'Faild',
    });
  }
};

const singlePost = async (ctx) => {
  const post = await db.post.findOne({
    where: { custom_link: ctx.params.custom_link },
    attributes: ['id', 'content'],
  });

  ctx.body = JSON.stringify(post.toJSON());
};

module.exports = {
  allPosts,
  singlePost,
};
