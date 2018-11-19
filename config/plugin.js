'use strict';

// had enabled by egg
// exports.static = true;
exports.validate = {
  enable: false,
  package: 'egg-validate',
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
