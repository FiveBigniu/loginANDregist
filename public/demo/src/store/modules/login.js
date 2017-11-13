import Vue from 'vue'

const state = {
	info:9,
	another:100
}
const mutations = {
	ADD (state){
		state.info++;
	},
	REMOVE (state){
		state.info--;
	},
	CESHI (state, value){
		state.info += value;
	}
}
const actions = {
	add ({commit}){//对象的解构赋值，相当于从对象中直接拿commit属性来用
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
