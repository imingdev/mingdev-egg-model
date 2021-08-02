const entity = require('../entity/comment');

module.exports = app => {
  const { Sequelize, model } = app;

  return entity(model, Sequelize);
};
