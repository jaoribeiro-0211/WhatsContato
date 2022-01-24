import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueTheMask from 'vue-the-mask'

const app = createApp(App)
app.use(VueTheMask)
app.mount('#app')
