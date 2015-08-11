<template>
<input type="text" v-model="text" />
<div>Hello {{ text }}</div> 
</template>

<script lang="babel">
export default {
	data() {
		return {
			text: 'vue'
		}
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