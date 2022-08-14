import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TakeQuizView from "../views/TakeQuizView.vue";
import QuestionView from "../views/QuestionView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/take-quiz/:id",
    name: "take-quiz",
    component: TakeQuizView,
  },
  {
    path: "/take-quiz/:id/question",
    name: "question",
    component: QuestionView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  strict: true,
});

export default router;
