import Vuex from 'vuex'
import Vue from 'vue'
import {getContent} from '../server9999.js'
import {getTitle} from '../server9999.js'

Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
	    idmsg:[],
	    message:'',
	    css:[]
	},
	mutations:{
		GETID(state,id){
			getContent(id).then((res)=>{
				state.idmsg=res
			})
		},
		GETMESSAGE(state,id){
			getTitle(id).then((res)=>{
				var getcss=res.css;
				var cssList=getcss.map((item)=>{
					return `<link rel="stylesheet" href="${item}"/>`;
			    });
                var getbody=res.body;
                var all=cssList+getbody;

				state.message=all
				
			})
		}
	}
})
export default store