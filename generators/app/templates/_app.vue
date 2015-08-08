<template>
<input type="text" v-model="text" />
<div>Hello {{ text }}</div> 
</template>

<script>
	module.exports = {
		el: '#app',
		data: {
			text: 'Vue'
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