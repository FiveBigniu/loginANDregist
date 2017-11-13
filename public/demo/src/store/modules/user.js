import Vue from 'vue'

const state = {
	user_id:'',
	user_name:'',
	user_state:''
	
}
const mutations = {
	USERNAME (state){
		state.user_id++;
	},
	REMOVE (state){
		state.info--;
	},
	CESHI (state, value){
		state.info += value;
	}
}
const actions = {
	username ({commit}){//对象的解构赋值，相当于从对象中直接拿commit属性来用
		commit('ADD');
	},
	remove ({commit}){
		commit('REMOVE');
	},
	ceshi ({commit}, value) {
		commit('CESHI', value.value);
	}
}
const getter = {
	anotherWay (state){
		return state.another
	}
}
export default {
	state,
	mutations,
	actions,
	getter
}
