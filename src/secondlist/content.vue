
<!-- 正文内容列表项 首页渲染进“/”组件  其余渲染到 -->

<template>
	<div id="list">
		<ul>
			<li @click="handleC(item.news_id)" v-for="item in content">
				<img :src="item.thumbnail">
				<span v-text="">{{item.title}}</span>
			</li>	
		</ul>
	</div>
</template>

<script>
    import {getNews} from '../server9999.js'
	export default {
		name:'list',
		data(){
			return{
               content:[]
			}
		},
		methods:{
            handleC(id){
            	this.$router.push({
            		path:'/view',
            		query:{
            			id
            		}
            	})
            	this.$store.commit('GETMESSAGE',id)
            }
		},
		mounted(){	   
            getNews().then((res)=>{
            	this.content=res
            })
		}	
		// props:['id']
        
	}
</script>
<style>
	#list{
		width:100%;
		height:480px;
		background-color:#fff;
		position:absolute;		
		overflow-y:scroll;
	}
	#list li{
		position:relative;
		list-style:none;
		width:350px;
		margin:10px auto;
		box-shadow:0 0 5px 2px #999;
		
	}
	#list img{
		width:70px;height:70px;
	}
	#list span{
		width:250px;
		height:70px;
		line-height:35px;
		display:block;
		position:absolute;
		top:0px;
		right:20px;
	}
</style>