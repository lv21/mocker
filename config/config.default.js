'use strict';

module.exports = appInfo => {
  const config = exports = {
    security: {
      csrf: {
        enable: false,
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  // config.keys = appInfo.name + '_1542607175074_8203';

  // add your config here
  config.middleware = [ 'errorHandler' ];

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'dev-newsport',
    host: 'rm-uf62w3234a8aks2f8lo.mysql.rds.aliyuncs.com',
    port: 3306,
    username: 'dev',
    password: 'Zucc123456',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    timezone: '+08:00',
    // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
    // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    // more sequelize options
  };

  return config;
};
