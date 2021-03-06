module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('tag', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    underscored: true,
  });

  Tag.associate = (models) => {
    Tag.belongsToMany(models.post, {
      through: 'PostTag',
    });
  };

  return Tag;
};
