import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/switchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import TabDemo from './components/TabsDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import Intro from './views/intro.vue'
import getStart from './views/getStart.vue'
import install from './views/install.vue'
import keyBoardDemo from './components/keyBoardDemo.vue'

const history=createWebHashHistory()
export const router=createRouter({
    history:history,
    routes:[
        { path:'/',component:Home},
        { path:'/doc',component:Doc,
        children:[
            {path:'',redirect:'/doc/intro'},
            {path:'switch',component:SwitchDemo},
            {path:'button',component:ButtonDemo},
            {path:'dialog',component:DialogDemo},
            {path:'tab',component:TabDemo},
            {path:'intro',component:Intro},
            {path:'get-start',component:getStart},
            {path:'install',component:install},
            {path:'keyBoardDemo',component:keyBoardDemo},
            
        ]}
    ]

})
