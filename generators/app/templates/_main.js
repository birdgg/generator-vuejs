import Vue from 'vue'<% if (includeResource) { %>
import vueResource from 'vue-resource'<% } %><% if (includeRouter) { %>
import VueRouter from 'vue-router'<% } %>

Vue.config.debug = process.env.NODE_ENV !== 'production'<% if (includeResource) { %>

Vue.use(vueResource)<% } %><% if (includeRouter) {%>
Vue.use(VueRouter)
const router = new VueRouter()
const App = Vue.extend(require('./app.vue'))
router.start(App, '#app')<% } else { %>
const App = new Vue(require('./app.vue'))<% } %>
