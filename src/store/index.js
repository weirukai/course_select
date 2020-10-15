import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import state from "@/store/state";
import Vue from 'vue'
import mutations from "@/store/mutation";
import actions from "@/store/actions";
Vue.use(Vuex)
let store = new Vuex.Store({
    state,
    mutations,
    actions,
    plugins:[createPersistedState({
        reducer(val){
                return val.token
        }
    })]
})

export default store