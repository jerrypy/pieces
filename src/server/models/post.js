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

    // TODO: 这个只有type为0才需要不为空
    custom_link: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        len: [2, 50],
        is: ['^[a-zA-Z0-9-]+$', 'gi'],
      },
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
