import Vue from 'vue'
import axios from 'axios'

var url="http://localhost:9999"



export function getSlider(){
     return axios(`${url}/api/4/themes`).then((res)=>{
     	var artilist=res.data
     	return artilist
     })
}
export function getNews(){
	 return axios(`${url}/api/3/news/hot`).then((res)=>{
	 	return res.data.recent
	 })
}
export function getContent(id){
     return axios(`${url}/api/4/theme/${id}`).then((res)=>{
     	return res.data.stories
     })
}

export function getTitle(id){
     return axios(`${url}/api/4/news/${id}`).then((res)=>{
     	  return res.data
     })
}



