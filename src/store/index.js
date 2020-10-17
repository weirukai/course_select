import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import state from "@/store/state";
import Vue from 'vue'
import mutations from "@/store/mutation";
import actions from "@/store/actions";
import getters from "@/store/getters";
Vue.use(Vuex)
let store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins:[createPersistedState({
        reducer(val){
                return {
                    token:val.token}
        }
    })]
})

export default store