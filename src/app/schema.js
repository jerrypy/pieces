import { schema } from 'normalizr';

const user = new schema.Entity('users');

const tag = new schema.Entity('tags');

const post = new schema.Entity('posts', {
  postAuthor: user,
  postTags: [tag],
}, { idAttribute: 'postId' });

const postList = [post];

// const originData = [{"postId":3,"postTitle":"Nice to meet you","customLink":"nice-to-meet-you","postDate":{"month":11,"day":16,"year":2017},"postTags":[{"id":3,"name":"Test"}],"postAuthor":{"id":1,"username":"jerrypy"}},{"postId":1,"postTitle":"Hello World!","customLink":"hello-world","postDate":{"month":11,"day":15,"year":2017},"postTags":[{"id":1,"name":"Life"},{"id":2,"name":"HelloWorld"}],"postAuthor":{"id":1,"username":"jerrypy"}}];

// const normalizedData = normalize(originData, postList);

// console.log(normalizedData);
export default postList;
