
<!-- 正文内容列表项 首页渲染进“/”组件  其余渲染到 -->

<template>
	<div id="list2">
		<ul>
			<li @click="handleC(item.id)" v-for="item in idmsg">
				<img :src="item.images">
				<span v-text="">{{item.title}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
    import {getContent} from '../server9999.js'
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
		computed:{
            idmsg(){
            	return this.$store.state.idmsg
             }
		}
	}
</script>
<style>
   #list2{
   	width:100%;
   	height:480px;
   	overflow-y: scroll;
   	position:absolute;
   }
   #list2 li{
		position:relative;
		list-style:none;
		width:350px;
		margin:10px auto;
		box-shadow:0 0 5px 2px #999;
		
	}
	#list2 img{
		width:70px;height:70px;
	}
	#list2 span{
		width:250px;
		height:70px;
		line-height:35px;
		display:block;
		position:absolute;
		top:0px;
		right:20px;
	}
</style>