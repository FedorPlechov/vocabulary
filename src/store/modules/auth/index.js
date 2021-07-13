import mutations from "@/store/modules/auth/mutations";
import getters from './getters'
import actions from './actions'

export default {
    state() {
        return {
            userId: 1,
            token: null,
            didAutoLogout: false,
        };
    },
    mutations,
    actions,
    getters
};
