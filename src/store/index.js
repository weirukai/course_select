import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import state from "@/store/state";
import mutations from "@/store/mutation";
import actions from "@/store/actions";
let Store = new Vuex.Store({
    state,
    mutations,
    actions,
    plugins:[createPersistedState({
        reducer(val){
                return val.token
        }
    })]
})

export default Store