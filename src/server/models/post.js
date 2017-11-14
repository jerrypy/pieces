/**
 * Post Model定义
 */

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {

    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },

    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: { notEmpty: true },
    },

    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: { notEmpty: true },
    },

    // 自定义链接
    // TODO: 这个必须要URL SAFE，需要自定义一个validator，而且不能重复，长度限制在url范围以内
    custom_link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    // 文章类型：0-普通文章，1-关于我，2-roar
    type: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

  }, {
    /**
     * scopes定义
     */
    scopes: {
      normalPost: {
        where: {
          type: 0,
        },
      },
      aboutPost: {
        where: {
          type: 1,
        },
      },
      roarPost: {
        where: {
          type: 2,
        },
      },
    },
    paranoid: true,
    underscored: true,
  });

  Post.associate = (models) => {
    Post.belongsTo(models.user);
    Post.belongsToMany(models.tag, {
      through: 'PostTag',
    });
  };

  return Post;
};
