const entity = require('../entity/article');

module.exports = app => {
  const { Sequelize, model } = app;

  return entity(model, Sequelize);
};
