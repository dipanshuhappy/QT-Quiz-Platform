import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Equal from "equal-vue";
import { Inkline, components } from "@inkline/inkline";
import "@inkline/inkline/inkline.scss";
import "./main.scss";
// import "equal-vue/dist/style.css";

createApp(App)
  .use(Inkline, {
    components,
  })
  .use(store)
  .use(router)
  .mount("#app");
