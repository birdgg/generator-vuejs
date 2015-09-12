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