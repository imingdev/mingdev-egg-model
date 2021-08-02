const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('article', {
    id: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      comment: "文章id"
    },
    stick: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "是否置顶"
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "标题"
    },
    summary: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "简介"
    },
    cover: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "封面图"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "正文内容"
    },
    commentCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "评论总数"
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "点赞数"
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "浏览量"
    }
  }, {
    sequelize,
    tableName: 'article',
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
