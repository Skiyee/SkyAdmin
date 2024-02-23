import '@/assets/styles/reset.css'
import 'virtual:uno.css'

import { createApp } from 'vue'
import App from './App.vue'
import { setupProcess } from './process'

const app = createApp(App)

setupProcess(app)

app.mount('#app')
