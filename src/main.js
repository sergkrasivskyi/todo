import '@/assets/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from "@/components";
import componentsUI from "@/components/UI";
import componentsViews from "@/views";
import componentsIcons from "@/components/icons/";

import { useToDoList } from "@/stores/ToDoListStore";
import { useToDoUsers } from "@/stores/ToDoUserStore";
import { createPinia } from "pinia";

const app = createApp(App)

componentsIcons.forEach((element) => app.component(element.name, element));
componentsUI.forEach((element) => app.component(element.name, element));
components.forEach((element) => app.component(element.name, element));
componentsViews.forEach((element) => app.component(element.name, element));

app
.use(router)
.use(createPinia())
.mount("#app");

export const toDosListStore = useToDoList();
export const toDoUserStore = useToDoUsers();