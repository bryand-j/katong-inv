<script>
export default {
	props:{
		type:{
			type:String,default:'primary'
		}
	}
}
</script>
<template>
	<button :class="'btn fs-6 px-6 btn-'+type">
		<slot></slot>
	</button>
	
</template>
<style>
	
</style>