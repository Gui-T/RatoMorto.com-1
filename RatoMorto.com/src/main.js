import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

import './assets/main.css'

const app = createApp(App)
app.use(BootstrapIconsPlugin);

app.use(router)

app.mount('#app')
