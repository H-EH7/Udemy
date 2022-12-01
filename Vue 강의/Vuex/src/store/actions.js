export default {
  logIn(context) {
    context.commit('changeLoggedState', { isAuth: true });
  },
  logOut(context) {
    context.commit('changeLoggedState', { isAuth: false });
  },
};
