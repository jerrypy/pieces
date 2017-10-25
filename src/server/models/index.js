import fs from 'fs';
import path from 'path';

import Sequelize from 'sequelize';
import config from '../../../config/default';


const sequelize = new Sequelize(config.db.DATABASE, config.db.USERNAME, config.db.PASSWORD, config.db);
const db = {};

/**
 * 读取当前文件夹（models）下除index.js外所有的model定义文件，并使用import导入
 * model都保存到db中
 */
fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach(file => {
        let model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

/**
 * 建立模型间的关系
 */
Object.keys(db).forEach(moduleName => {
    if ('associate' in db[moduleName]) {
        db[moduleName].associate(db);
    }
});

module.exports = db;