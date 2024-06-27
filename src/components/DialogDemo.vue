<template>
  dialog组件
  <h1>示例1</h1>
  <div>使用具名插槽来自定义title和主要内容</div>
  <Button @click="toggle">toggle</Button>
   <Dialog v-model:visible="x" 
   :closeOnClickOverlay="false"
   :ok="f1"
   :cancel="f2"
   >
   <template v-slot:content>
    <div>hi</div>
    <div>hi!</div>
   </template>
   <template v-slot:Title>
    <strong>标签</strong>
   </template>
   </Dialog>
   <h1>示例2</h1>
   <div>用h函数来打开dialog</div>
    <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import { ref } from 'vue'
import {openDialog} from '../lib/openDialog'
import Dialog from '../lib/Dialog.vue'
export default {
components:{Dialog,Button },
setup(){
  const x = ref(false)
  
    const toggle = () => {
      x.value = !x.value
    }
    const f1=()=>{
      return true
    }
    const f2=()=>{
      return true
    }
    const showDialog=()=>{
      openDialog({
        title:'标题',
        content:'你好',
        ok(){console.log('ok');
        },
        cancel(){console.log('cancel');
        }
      })
    }
  return{x,toggle,f1,f2,showDialog}
}
}

</script>

<style>

</style>