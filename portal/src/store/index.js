import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state :{
        rid:''
    },
    mutations:{
        setRid(state,pload){
            state.rid = pload.rid;
        }
    }
});

export default store;