const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('file', {
    id: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      comment: "主键id"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "文件名称"
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "文件地址"
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "文件大小"
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "文件类型"
    },
    extra: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "额外信息"
    }
  }, {
    sequelize,
    tableName: 'file',
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
