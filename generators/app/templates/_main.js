import Vue from 'vue'<% if (includeResource) { %>
import vueResource from 'vue-resource'<% } %><% if (includeRouter) { %>
import VueRouter from 'vue-router'
import { configRouter } from './router-config'<% } %>

Vue.config.debug = process.env.NODE_ENV !== 'production'<% if (includeResource) { %>

Vue.use(vueResource)<% } %><% if (includeRouter) {%>

Vue.use(VueRouter)
const router = new VueRouter({
})
configRouter(router)
const App = Vue.extend(require('./app.vue'))
router.start(App, '#app')<% } %><% if (!includeRouter) { %>
const App = new Vue(require('./app.vue'))<% } %>
