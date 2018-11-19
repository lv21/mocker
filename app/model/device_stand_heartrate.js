'use strict';

module.exports = app => {

  const {
    STRING,
    INTEGER,
    DATE,
    BIGINT,
    DATEONLY,
  } = app.Sequelize;

  const DeviceStandHeartrate = app.model.define('device_stand_heartrate', {
    record_id: {
      type: STRING(50),
      primaryKey: true,
    },
    heartrate_value: INTEGER(10),
    device_id: STRING(20),
    measure_time: DATE,
    create_time: DATE,
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'device_stand_heartrate',
  });

  return DeviceStandHeartrate;
};
