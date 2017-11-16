import fs from 'fs';
import path from 'path';

import Sequelize, { Op } from 'sequelize';
import config from '../../../config/default';

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
  const user = await db.user.findOne({ where: { username: 'jerrypy' } });
  const post = await db.post.create({
    title: 'Nice to meet you',
    content: 'This is a test post.',
    summary: 'This is a test post.',
    custom_link: 'nice-to-meet-you',
    tags: [
      { name: 'Test' },
    ],
  }, {
    include: [db.tag],
  });

  await post.setUser(user);
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
}

// mockDB();

db.sequelize = sequelize;
module.exports = db;
