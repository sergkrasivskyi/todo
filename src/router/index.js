import { createRouter, createWebHistory } from 'vue-router'
import SplashScreen from "@/views/SplashScreen.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "splashscreen",
      component: SplashScreen,
    },
    {
      path: "/homescreen",
      name: "homescreen",
      component: () => import("@/views/ToDoHomeScreen.vue"),
    },
    {
      path: "/addscreen",
      name: "addscreen",
      component: () => import("@/views/ToDoAddTaskScreen.vue"),
    },
    {
      path: "/editscreen",
      name: "editscreen",
      component: () => import("@/views/ToDoEditTaskScreen.vue"),
    },
  ],
});

export default router
