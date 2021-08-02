const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comment', {
    id: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      comment: "主键id"
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "用户昵称"
    },
    targetId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "目标id，如文章id、留言(message)"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "内容"
    }
  }, {
    sequelize,
    tableName: 'comment',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
