import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'virtual:uno.css' // 引入动态生成的 CSS

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
