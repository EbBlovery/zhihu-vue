<template>
	<div class="headmenu">
		<div class="menu" @click="handleClick"></div>
		<span>{{}}</span>
	</div>
</template>
<script>
	export default {
		name:'headmenu',
		data(){
			return {

			}
		},
		methods:{
			handleClick(){
				this.onClick()
			}
		},
		props:['onClick']
	}
</script>
<style>
	.headmenu{
		width:100%;
		height:70px;
		background-color:blue;
		position:relative;
	}
	.headmenu div{
		position:absolute;
		top:40px;
		left:30px;
	}
	.menu {
		position: relative;
        height: 16px;
        width: 20px;
        border-color: #fff;
        border-style: solid;
        border-width: 2px 0;
        cursor: pointer;
    }
    .menu::before{
    	margin:6px 0px;
    	position: absolute;
        content: "";
        width: 20px;
        height: 2px;
        background-color: #fff;
    }
</style>