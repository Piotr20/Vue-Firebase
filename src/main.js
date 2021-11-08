import { createApp } from "vue";
import router from "./router";
import "./firebaseInit.js";
import App from "./App";

createApp(App).use(router).mount("#app");
