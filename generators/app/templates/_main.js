var Vue = require('vue');
<% if (includeResource) { %>
var vueResource = require('vue-resource');
Vue.use(vueResource);
<% } %>
Vue.config.debug = true;
var app = new Vue(require('./app.vue'));

<% if (includeDirect) { %>
var Router = require('director').Router;
var router = new Router();
<% } %>
