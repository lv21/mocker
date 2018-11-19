'use strict';

module.exports = app => {

  const {
    STRING,
    INTEGER,
    DATE,
    BIGINT,
    DATEONLY,
  } = app.Sequelize;

  const DeviceKit = app.model.define('device_kit', {
    kit_id: {
      type: INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    kit_name: STRING(20),
    device_brand: STRING(20),
    org_id: STRING(50),
    created: DATE,
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'device_kit',
  });

  return DeviceKit;
};
