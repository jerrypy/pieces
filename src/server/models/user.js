/**
 * User Model定义
 */
import crypto from 'crypto';

module.exports = (sequelize, DataTypes) => {
    let User =  sequelize.define('user', {
        // 用户名
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                is: ['^([a-zA-Z0-9]|[_]){4,16}$', 'gi']
            }
        },

        // 密码哈希
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        // 用户邮箱地址
        email: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                isEmail: true
            }
        }
    }, {
        // don't delete database entries but set the newly added attribute deletedAt
        // to the current date (when deletion was done). paranoid will only work if
        // timestamps are enabled
        paranoid: true,

        // don't use camelcase for automatically added attributes but underscore style
        // so updatedAt will be updated_at
        underscored: true,

        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural(复数).
        // if you don't want that, set the following
        // freezeTableName: true,

        setterMethods: {

            /**
             * 密码哈希的setter函数，输入明文密码，保存哈希值在数据库中
             * @param {string} pass 
             */
            password(pass) {

                // TODO 计算密码哈希
                const hash = crypto.createHash('md5');
                hash.update(pass);
                this.setDataValue('password', hash.digest('hex'));
            }
        }
    });
    
    return User;
};