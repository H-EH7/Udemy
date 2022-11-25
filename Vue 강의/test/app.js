const app = Vue.createApp({
  data() {
    return {
      test: "",
      showedTest: "",
    };
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("Updated()");
  },
});

app.mount("#assignment");
