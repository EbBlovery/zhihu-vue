<template>
	<div id="container">
		<gView v-bind:count="count"></gView>
		<Counter :inc="inc" :dec="dec"></Counter>
		</hr>
	</div>
</template>

<script>

import View from './components/View.vue';
import Counter from './components/Counter.vue';

export default {
	name:"app",
	data(){
		return {
			count:0
		}
	},
	mounted(){
	},
	methods:{
		inc(){
			this.count++;
		},
		dec(){
			this.count++;
		}
	},
	components:{
		gView:View,
		Counter
	}
}
</script>

<style lang="less" scope>

</style>
