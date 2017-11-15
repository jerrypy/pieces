import db from '../models';

const allPosts = async (ctx) => {
  const posts = await db.post.scope('normalPost').findAll({
    attributes: ['id', 'title', 'custom_link', 'updated_at'],
    include: [{
      model: db.tag,
      attributes: ['id', 'name'],
    }, {
      model: db.user,
      attributes: ['id', 'username'],
    }],
  });

  const res = posts.map((originPost) => {
    const post = originPost.toJSON();
    const date = post.updated_at;
    return {
      postId: post.id,
      postTitle: post.title,
      customLink: post.custom_link,
      postDate: { month: date.getMonth(), day: date.getDay(), year: date.getFullYear() },
      postTags: post.tags.map(tag => ({ id: tag.id, name: tag.name })),
      postAuthor: post.user,
    };
  });

  ctx.body = JSON.stringify(res);
};

const allRoars = async (ctx) => {
  const roars = db.post.scope('roarPost').findAll();

  ctx.body = JSON.stringify(roars);
};

module.exports = {
  allPosts,
  allRoars,
};
