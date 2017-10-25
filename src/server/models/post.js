/**
 * Post Model定义
 */

module.exports = (sequelize, DataTypes) => {
    let Post = sequelize.define('post', {

       title: {
           type: DataTypes.STRING,
           allowNull: false,
           validate: { notEmpty: true }
       },

       summary: {
           type: DataTypes.TEXT,
           allowNull: false,
           validate: { notEmpty: true }
       },

       content: {
           type: DataTypes.TEXT,
           allowNull: false,
           validate: { notEmpty: true }
       },
    
       // 文章类型：0-普通文章，1-微博
       type: {
           type: DataTypes.INTEGER,
           defaultValue: 0 
       }

    }, {
        /**
         * scopes定义
         */
        scopes: {
            normalPost: {
                where: {
                    type: 0
                }
            },
            weiboPost: {
                where: {
                    type: 1
                }
            }
        },
        paranoid: true,
        underscored: true
    });

    Post.associate = models => {
        Post.belongsTo(models.user);
        Post.belongsToMany(models.tag, {
            through: 'PostTag'
        })
    }

    return Post;
 };