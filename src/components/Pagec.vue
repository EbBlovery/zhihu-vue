
<!-- countent路由 对应artlicle组件 -->

<template>
	<my-content></my-content>
</template>
<script>
    import Content from '../secondlist/sliderlist.vue'
	export default{
		name:'',
		data(){
			return{

			}
		},
		methods:{

		},
		computed(){
			return this.$route.query.id;
		},
		components:{
			'my-content':Content
		}
	}
</script>