import { createApp } from "vue";
import App from "./App.vue";
import BaseSlot from "./components/BaseSlot.vue";

const app = createApp(App);

app.component("base-slot", BaseSlot);

app.mount("#app");
