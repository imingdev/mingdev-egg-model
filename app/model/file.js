const entity = require('../entity/file');

module.exports = app => {
  const { Sequelize, model } = app;

  return entity(model, Sequelize);
};
