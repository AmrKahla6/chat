"use strict";

var _laravelEcho = _interopRequireDefault(require("laravel-echo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('./bootstrap');

window.io = require('socket.io-client');
window.Echo = new _laravelEcho["default"]({
  broadcaster: 'socket.io',
  host: window.location.hostname + ':6001'
});