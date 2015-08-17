var Vue = require('vue');
<% if (includeResource) { %>
var vueResource = require('vue-resource');
Vue.use(vueResource);
<% } %>
Vue.config.debug = true;

<% if (includeRouter) { %>
var VueRouter = require('vue-router');
Vue.use(VueRouter);
// create router
var router = new VueRouter({
  history: true,
  saveScrollPosition: true
})
require('./route-config')(router)
var App = Vue.extend(require('./app.vue'))
router.start(App, '#app');
<% } %>
var App = new Vue(require('./app.vue'));
