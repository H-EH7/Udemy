<template>
  <button @click="logIn" v-if="!loggedState">Login</button>
  <button @click="logOut" v-else>Logout</button>
  <p>{{ isTestAuth }}</p>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['loggedState']),
    isTestAuth() {
      return this.$store.getters['numbers/testAuth'];
    },
  },
  methods: {
    ...mapActions(['logIn', 'logOut']),
  },
};
</script>
