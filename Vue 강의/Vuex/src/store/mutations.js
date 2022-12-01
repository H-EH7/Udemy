export default {
  changeLoggedState(state, payload) {
    state.isLoggedIn = payload.isAuth;
  },
};
