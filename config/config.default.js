const hashSum = require('hash-sum');

exports.sequelize = {
  define: {
    freezeTableName: true,
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  hooks: {
    beforeValidate: obj => {
      // 自动生成主键id
      if (obj.isNewRecord && !obj.dataValues.id) obj.id = hashSum(Date.now());
    },
  },
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
  },
  timezone: '+08:00',
};
