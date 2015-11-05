// https://github.com/bcoe/yargs
const argv = require('yargs').argv;
const NODE_ENV = process.env.NODE_ENV || 'development';
const NODE_ENV_CORDOVA = (process.env.NODE_ENV === 'prod_cordova') || 'dev_cordova';

module.exports = {

  // environment
  __CLIENT__: true,
  __SERVER__: false,
  __DEV__: NODE_ENV === 'development',
  __PROD__: NODE_ENV === 'production',
  __PROD_CORDOVA__: NODE_ENV_CORDOVA === 'prod_cordova',
  __DEV_CORDOVA__: NODE_ENV_CORDOVA === 'dev_cordova',
  __DEBUG__: !!argv.debug,

  // server configuration
  WEBPACK_PORT: 8080,
  SERVER_PORT: process.env.PORT || 9000,
};
