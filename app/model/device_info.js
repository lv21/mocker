'use strict';

module.exports = app => {

  const {
    STRING,
    INTEGER,
    DATE,
    BIGINT,
    DATEONLY,
  } = app.Sequelize;

  const DeviceInfo = app.model.define('device_info', {
    id: {
      type: BIGINT(11),
      primaryKey: true,
      autoIncrement: true,
    },
    kit_id: INTEGER(10),
    device_code: STRING(10),
    device_id: STRING(20),
    bind_time: DATE,
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'device_info',
  });

  return DeviceInfo;
};
