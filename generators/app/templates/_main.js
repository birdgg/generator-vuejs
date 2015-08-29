var Vue = require('vue')<% if (includeResource) { %>

var vueResource = require('vue-resource')
Vue.use(vueResource)<% } %>

Vue.config.debug = process.env.NODE_ENV !== 'production'<% if (includeRouter) { %>

var VueRouter = require('vue-router')
Vue.use(VueRouter)

var router = new VueRouter({
})

require('./router-config')(router)
var App = Vue.extend(require('./app.vue'))
router.start(App, '#app')<% } %><% if (!includeRouter) { %>
var App = new Vue(require('./app.vue'))<% } %>
