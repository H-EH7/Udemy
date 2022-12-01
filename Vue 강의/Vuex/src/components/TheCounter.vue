<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    // ... 은 spread operater로 반환값을 프로퍼티 내부로 퍼뜨림 (mapGetters의 반환 타입은 객체)
    // namespace 사용
    ...mapGetters('numbers', ['finalCounter']),
  },
};
</script>
