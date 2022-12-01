<template>
  <h3>{{ counter }}</h3>
  <p>We do more..</p>
</template>

<script>
export default {
  computed: {
    counter() {
      // 네임스페이스 사용해서 getters 호출
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
};
</script>
