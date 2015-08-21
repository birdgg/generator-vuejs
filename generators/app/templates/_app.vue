<template>
<input type="text" v-model="text" />
<div>Hello {{ text }}</div> 
</template>

<script>
export default {
	el: '#app',
	data: {
		text: 'vue'
	}
}	
</script>

<style>
input {
	display: block;
  margin: 30px auto;
  width: 50%;
  height: 20px;
}

div {
	display: block;
  margin: 30px auto;
  width: 50%;
  height: 20px;
}
</style>