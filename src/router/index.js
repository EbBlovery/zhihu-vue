import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Counter from '../components/Counter.vue'
import Pagec from '../components/Pagec.vue'
import View from '../components/View.vue'

var routes =[
    {
    	path:'/',
    	component:Counter
    },{
    	path:'/content',
    	component:Pagec
    },{
    	path:'/view',
    	component:View
    }
]

export default new Router({
	routes,
	mode:'hash'
})