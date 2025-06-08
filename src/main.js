import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 建立應用並使用路由
const app = createApp(App)
app.use(router)
app.mount('#app')
