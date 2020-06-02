import Vue from 'vue'
import Vuex from 'vuex'
import createVuexAlong from 'vuex-along'
Vue.use(Vuex)
const store = new Vuex.Store({
    state :{
        rid:''
    },
    mutations:{
        setRid(state,pload){
            state.rid = pload.rid;
        }
    },
    plugins: [createVuexAlong()]
});

export default store;