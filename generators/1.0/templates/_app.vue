<template>
<input type="text" v-model="text" />
<div>Hello {{ text }}</div> 
</template>

<script>
export default {<% if (includeRouter) { %>
	data() {
    return {
      text: 'vue'
    }
  }<% } else { %>
  el: '#app',
  data: {
    text: 'vue'
  }<% } %>
}	
</script>