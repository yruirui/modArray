import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import tina from './components/tina.vue'
import tina2 from './components/tina2.vue'

const history=createWebHashHistory()
const router=createRouter({
    history:history,
    routes:[
        { path:'/',component:tina},
        { path:'/tina2',component:tina2}
    ]

})


const app = createApp(App)
app.use(router)
app.mount('#app')

