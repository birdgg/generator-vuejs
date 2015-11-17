<template>
<input type="text" v-model="text" />
<div>Hello {{ text }}</div> 
</template>

<script>
export default {
  replace: false,
	data() {
    return {
      text: 'vue'
    }
  }
}	
</script>