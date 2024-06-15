<template>
 
  <router-view/>
  
</template>

<script lang="ts">
import { provide, ref } from 'vue'
import { router } from './router'


export default {
  name: 'App',
  components: {
    
  },
  setup(){
    const width=document.documentElement.clientWidth
    let menuVisible=ref(width<=500?false:true)
    provide('xxx',menuVisible)
    router.afterEach(()=>{
    if(width<=500){
      menuVisible.value=false
    }

    })
  },
  
}
</script>
