import { createApp } from 'vue'
import './lib/gulu.scss'
import App from './App.vue'
import './index.scss'
import { router } from './router'
import 'github-markdown-css'
import MarkDown from '../src/components/MarkDown.vue'



const app = createApp(App)
app.use(router)
app.mount('#app')
app.component("MarkDown",MarkDown)

