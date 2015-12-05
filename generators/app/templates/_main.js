import Vue from 'vue'
import app from './app.vue'<% if (includeRouter) { %>
import VueRouter from 'vue-router'<% } %>
<% if (includeVuestrap) { %>
import 'bootstrap/dist/css/bootstrap.css'<% } %>
import './styles.css'

Vue.config.debug = process.env.NODE_ENV !== 'production'
<% if (includeRouter) {%>
Vue.use(VueRouter)

const router = new VueRouter()
const App = Vue.extend(app)

router.start(App, 'body')<% } else { %>
const App = new Vue({
  el: 'body',
  components: {
    app
  }
})<% } %>
