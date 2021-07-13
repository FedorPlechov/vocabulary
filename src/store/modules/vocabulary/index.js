import getters from "@/store/modules/vocabulary/getters";
import actions from './actions'
import mutations from "@/store/modules/vocabulary/mutations";

export default {
    namespaced: true,
    state(){
       return {
           chunks: null,
           isCreated: false
       }
    },
    getters,
    mutations,
    actions
}
