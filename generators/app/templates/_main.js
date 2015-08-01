var Vue = require('vue');
var Router = require('director').Router;
var vueResource = require('vue-resource');
Vue.use(vueResource);
Vue.config.debug = true;
var app = new Vue(require('./app.vue'));
var router = new Router();