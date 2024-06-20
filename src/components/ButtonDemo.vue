<template>
  <div>这里是Button的示例</div>
  <h1>示例1</h1>
  <div>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>   
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="big">你好</Button>
    <Button size="normal">你好</Button>
    <Button size="small">你好</Button>   
  </div>
   <div>
    <Button size="big" theme="link">big-link</Button>
    <Button size="big" theme="normal">big-normal</Button>
    <Button size="big" theme="small">big-small</Button>
   </div>
   <h1>示例三</h1>
   <div>
    <Button >普通按钮</Button>
    <Button level="main">主要按钮</Button>
    <Button level="danger">危险按钮</Button>
   </div>
</template>

<script lang="ts" >
import Button from '../lib/Button.vue'
export default {
components:{Button}
}
</script>

<style>

</style>