import fs from 'fs';
import path from 'path';

import Sequelize from 'sequelize';
import config from '../../../config/default';

const Op = Sequelize.Op;
const sequelize = new Sequelize(
  config.db.DATABASE,
  config.db.USERNAME,
  config.db.PASSWORD,
  config.db,
);
const db = {};

/**
 * 读取当前文件夹（models）下除index.js外所有的model定义文件，并使用import导入
 * model都保存到db中
 */
fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

/**
 * 建立模型间的关系
 */
Object.keys(db).forEach((moduleName) => {
  if ('associate' in db[moduleName]) {
    db[moduleName].associate(db);
  }
});

async function mockDB() {
  // await sequelize.sync({ force: true });
  // const userJerry = await db.user.create({ username: 'jerrypy', password: 'swing4life' });

  // const post = await db.post.create({
  //   title: 'Hello World!',
  //   content: 'This is a test post.',
  //   summary: 'This is a test post.',
  //   custom_link: 'hello-world',
  //   tags: [
  //     { name: 'Life' },
  //     { name: 'HelloWorld' },
  //   ],
  // }, {
  //   include: [db.tag],
  // });

  // await post.setUser(userJerry);
  // const tag1 = await db.tag.create({ name: 'Life' });
  // const tag2 = await db.tag.create({ name: 'Hello World' });
  // const post1 = await db.post.create({
  //   title: 'Hello World!',
  //   content: 'This is a test post.',
  //   summary: 'This is a test post.',
  //   custom_link: 'hello-world',
  // });

  // await post1.setUser(userJerry);
  // await post1.addTags([tag1, tag2]);
  db.post.scope('normalPost').findAll({
    include: [{
      model: db.tag,
      attributes: ['id', 'name'],
    }, {
      model: db.user,
      attributes: ['id', 'username'],
    }],
  }).then((posts) => {
    console.log(JSON.stringify(posts));
  });
}

// mockDB();


module.exports = db;
