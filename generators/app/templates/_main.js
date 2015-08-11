import Vue from 'vue'
<% if (includeResource) { %>
import vueResource from 'vue-resource'
Vue.use(vueResource);
<% } %>
Vue.config.debug = true;
let app = new Vue(require('./app.vue'));

<% if (includeDirect) { %>
import { Router } from 'director'
let router = new Router();
router.init('/');
<% } %>
