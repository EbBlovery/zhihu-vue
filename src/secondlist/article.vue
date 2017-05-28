<template><!-- 侧边栏列表项 -->
  	<div class="article">
	    <div class="logo">
	    	<img src="https://cn.vuejs.org/images/logo.png" width="70px" height="70px">
	    </div>
	    
        <div class="sidebar">
            <ul>
                <li @click="handleClick()">
                	<span>首页</span>
                </li>
				<li @click="handleInClick(item.id)" v-for="item in list">
				    <span>{{item.name}}</span>
				</li>
		    </ul>
        </div>
        <div class="hiden" @click="handle()"></div>
	</div>
	
	
</template>
<script> 
    import { getSlider } from '../server9999.js'
    import {bus} from '../newvue/emit.js'
    import axios from 'axios'
	export default{
		name:"article",
		data(){
			return {
              list:[]
			}
		},
		mounted(){
			getSlider().then((res)=>{
				this.list=res.others
			})
		},
		methods:{
            handleInClick(id){
            	this.$router.push({
            		path:'/content',
            		query:{
            			id
            		}
            	}),
            	this.onClick(),
                this.$store.commit('GETID',id)
            },
            handleClick(){
                this.$router.push('/')
                this.onClick()
            },
            handle(){
            	this.onClick()
            }

		},
		props:['onClick']
	}
</script>
<style>
	.article{
		position:absolute;
		background-color:#fff;
		width:100%;
		height:100%;
		top:0px;
		left:0px;
		transform: translateX(0);
	    transition: transform 0.3s;
	}	
	.article .logo{
		width:100%;
		height:100px; 
		background-color:blue;
	}
	.sidebar{
		width:inherit;
		height:inherit;
		background-color:#E6E6FA;
		height:450px;
	}
	.sidebar ul{
		width:100%;
		height:100%;
		padding:0px;
	}
	.sidebar li{
		width:300px;
		height:35px;
		background-color:#fff;
        margin:0px;
        list-style:none;
        line-height:35px;
        text-indent:20px;  
	}

	.sidebar li:hover{
		background-color:red
	}
    .shou{
    	transform:translateX(-500px);
    }


    .article .hiden{
       width:100px;
       height:600px;
       position:absolute;
       top:0px;
       right:0px;
       background-color:rgba(0,0,0,.6);
    }
</style>