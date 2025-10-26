import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue3-lazyload'

createApp(App).use(router).use(VueLazyLoad).mount('#app')