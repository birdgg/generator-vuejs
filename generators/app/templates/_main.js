var Vue = require('vue');
Vue.config.debug = true;
var app = new Vue(require('./app.vue'));

<% if (includeDirect) { %>
var Router = require('director').Router;
var router = new Router();
router.init('/');
<% } %>
