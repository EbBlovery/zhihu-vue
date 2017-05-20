<template>
	<div id="Counter">
		<button @click="dec">-</button>
		<button @click="inc">+</button>
	</div>
</template>
<script>
export default {
	name:"counter",
	data(){
		return{
			
		}
	},
	props:["inc","dec"]
}
</script>

