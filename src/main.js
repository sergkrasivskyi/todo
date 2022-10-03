import '@/assets/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia";
import componentsUI from "@/components/UI";
import components from "@/components";
import componentsViews from "@/views";
import componentsIcons from "@/components/icons/";

const app = createApp(App)

app
.use(createPinia())
.use(router)
// .use(store)
.mount('#app')

componentsIcons.forEach((element) => app.component(element.name, element));
componentsUI.forEach((element) => app.component(element.name, element));
components.forEach((element) => app.component(element.name, element));
componentsViews.forEach((element) => app.component(element.name, element));
