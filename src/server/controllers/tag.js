import db from '../models';

const tagPosts = async (ctx) => {
  const posts = await db.post.scope('normalPost').findAll({
    where: { name: ctx.params.tagName },
    attributes: ['id', 'title', 'custom_link', 'updated_at'],
    order: [['updated_at', 'DESC']],
    paranoid: true,
  });

  const res = posts.map((originPost) => {
    const post = originPost.toJSON();
    return post;
  });

  ctx.body = JSON.stringify(res);
};

module.exports = {
  tagPosts,
};
