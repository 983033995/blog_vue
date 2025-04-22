import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 可以在这里引入全局样式文件
// import './assets/main.css'

const app = createApp(App)

app.use(createPinia()) // 启用 Pinia
app.use(router)

app.mount('#app')
