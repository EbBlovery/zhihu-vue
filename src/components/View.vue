<template>
	<div class="title" v-html="message">
	<link rel="stylesheet" type="text/css" href="css">
	</div>
</template>
<script>
	import Titlt from '../secondlist/title.vue'
	export default{
		name:'title',
		data(){
			return{

			}
		},
		computed:{
			message(){
				console.log(this.$store.state.css)
				return this.$store.state.message
			},
			css(){

				return this.$store.state.css
			}
		}
	}
</script>
<style type="text/css">
	.title{
		width:100%;
		height:500px;
		overflow-y:scroll;
	}
</style>