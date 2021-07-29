import { createStore } from "vuex";

import vocabularyModule from './modules/vocabulary/index'
import authModule from './modules/auth/index'


export default createStore({
  state() {
    return {}
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    vocabulary: vocabularyModule,
    auth: authModule
  },
});
