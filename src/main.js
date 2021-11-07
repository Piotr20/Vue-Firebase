import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./firebaseInit.js";

createApp(App).use(router).mount("#app");
