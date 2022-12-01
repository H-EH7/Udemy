export default {
  namespaced: true,
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  mutations: {
    addProductToCart(state, payload) {
      const productInCartIndex = state.cart.items.findIndex(
        (ci) => ci.productId === payload.id
      );
      if (productInCartIndex >= 0) {
        state.cart.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: payload.id,
          title: payload.title,
          image: payload.image,
          price: payload.price,
          qty: 1,
        };
        state.cart.items.push(newItem);
      }
      state.cart.qty++;
      state.cart.total += payload.price;
    },
    removeProductFromCart(state, payload) {
      const productInCartIndex = state.cart.items.findIndex(
        (cartItem) => cartItem.productId === payload
      );
      const prodData = state.cart.items[productInCartIndex];
      state.cart.items.splice(productInCartIndex, 1);
      state.cart.qty -= prodData.qty;
      state.cart.total -= prodData.price * prodData.qty;
    },
  },
  actions: {
    addProductToCart(context, payload) {
      context.commit('addProductToCart', payload);
    },
    removeProductFromCart(context, payload) {
      context.commit('removeProductFromCart', payload);
    },
  },
  getters: {
    carts(state) {
      return state.cart;
    },
    cartTotal(state) {
      return state.cart.total.toFixed(2);
    },
  },
};
