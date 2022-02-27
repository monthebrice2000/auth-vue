import { createApp } from "vue";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import TheRegister from "@/components/TheRegister";
import TheLogin from "@/components/TheLogin";
import TheHome from "@/components/TheHome";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHome },
    { path: "/register", component: TheRegister },
    { path: "/login", component: TheLogin },
  ],
});

const app = createApp(App);
app.use(router);

app.mount("#app");
