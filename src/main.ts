/*
 * @Author: ce
 * @Date: 2022-11-08 10:48:30
 * @LastEditors: ce
 * @LastEditTime: 2022-11-08 11:02:12
 * @FilePath: /v3-project/src/main.ts
 */
import { createApp } from "vue";
import Store from "@/stores";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(Store);
app.use(router);

app.mount("#app");
