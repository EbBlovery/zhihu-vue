
<!-- “/”路由  对应首页内容 以及其余列表项内容-->
<template>
  <div>
  	 <my-components></my-components>
  </div>
 
</template>
<script>
    import Counter from '../secondlist/content.vue'
	export default{
		name:'artical',
		data(){
			return {
               id:null
			}
		},
		methods:{
			checkOut(id){
                // this.id=id
                // console.log(id)
			}
		},
		components:{
			'my-components':Counter
		}
	}
</script>