import { createApp } from 'vue'
import App from './App.vue'
import Btn from './components/Btn.vue'


import "./assets/plugins/global/plugins.bundle.css"
import "./assets/css/style.bundle.css"
const app = createApp(App)
app.component('btn',Btn)
app.mount('#app')
