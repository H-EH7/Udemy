export default {
  testAuth(_state, _getters, rootState /*, rootGetters */) {
    return rootState.isLoggedIn;
  },
  finalCounter(state) {
    return state.counter * 3;
  },
  // 관행적으로 사용하지 않을 인수일 경우 _로 표시함 (_, _2, _3, ...)
  normalizedCounter(_, getters) {
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  },
};
