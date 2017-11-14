const allPosts = async (ctx) => {
  ctx.body = JSON.stringify([
    {
      postId: 1,
      postTitle: 'hello world',
      customLink: 'hello-world',
      postDate: { month: 11, day: 11, year: 2017 },
      postTags: ['test', 'programm'],
      postAuthor: 'jerrypy',
    },
  ]);
};


module.exports = {
  allPosts,
};
