import { createStore } from 'vuex';

import productsModule from './modules/products.js';
import cartsModule from './modules/cart.js';

const store = createStore({
  modules: {
    products: productsModule,
    cart: cartsModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    changeLoggedState(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit('changeLoggedState', { isAuth: true });
    },
    logout(context) {
      context.commit('changeLoggedState', { isAuth: false });
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
