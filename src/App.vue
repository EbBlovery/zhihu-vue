<template>
    <div id="main">
        <div class="header"></div>
        <div class="slider">
            <my-header :onClick="handleClick"></my-header>
            <my-other></my-other>
            <my-article :class="silideVisilve?'shou':''" :onClick="handleClick"></my-article>
        </div>
    </div>
</template>
<script>
    import Article from './secondlist/article.vue'
    import Header from './secondlist/header.vue'
    import Other from './secondlist/other.vue'

    import axios from 'axios'


    export default {
        name:'main',
        data(){
            return {
                silideVisilve:true,
                list:[]
            }
        },
        components:{
            'my-header':Header,
            'my-article':Article,
            'my-other':Other
        },    
        methods:{
            handleClick(){
                 this.silideVisilve=!this.silideVisilve
            }
        }
    }
</script>
<style>
    *{padding:0px;margin:0px;}
    #main{
        width:400px;
        height:550px;
        background-color:rgb(244,244,244);
        margin:0px auto;
        position:relative;
        overflow:hidden;
    }   
</style>