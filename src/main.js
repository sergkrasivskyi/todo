import '@/assets/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import stores from './stores'
import components from "@/components";
import componentsUI from "@/components/UI";
import componentsViews from "@/views";
import componentsIcons from "@/components/icons/";

// import { pinia, useToDoList } from "@/stores/ToDoListStore";
import { createPinia } from "pinia";
// import { pinia, stores } from "@/stores";
// import { toDosListStore, toDoUserStore } from "@/stores";

// const pinia = createPinia();
const app = createApp(App)

componentsIcons.forEach((element) => app.component(element.name, element));
componentsUI.forEach((element) => app.component(element.name, element));
components.forEach((element) => app.component(element.name, element));
componentsViews.forEach((element) => app.component(element.name, element));

app
.use(router)
.use(createPinia())
.mount("#app");

// export const toDosList = useToDoListStore;
// export const toDosList = useToDoList();
// export const toDosList = stores.created();
// export const toDoUsers = stores.useToDoUsers;