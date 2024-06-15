import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/switchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import TabDemo from './components/TabDemo.vue'
import DialogDemo from './components/DialogDemo.vue'

const history=createWebHashHistory()
export const router=createRouter({
    history:history,
    routes:[
        { path:'/',component:Home},
        { path:'/doc',component:Doc,
        children:[
            {path:'switch',component:SwitchDemo},
            {path:'button',component:ButtonDemo},
            {path:'dialog',component:DialogDemo},
            {path:'tab',component:TabDemo},
            
        ]}
    ]

})
