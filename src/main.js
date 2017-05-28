import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store/vuex'

new Vue({
	el:"#app",
	store,
	router,
	render:h=>h(App)
})