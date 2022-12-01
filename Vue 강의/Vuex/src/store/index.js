import { createStore } from 'vuex';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './counter/index.js';

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  // data와 비슷
  state() {
    return {
      isLoggedIn: false,
    };
  },
  // methods와 비슷 / 항상 동기식으로 작동
  mutations: rootMutations,
  // 비동기를 위한 프로퍼티 / component -> action -> mutations 순으로 접근할 것
  actions: rootActions,
  // computed와 비슷
  getters: rootGetters,
});

export default store;
