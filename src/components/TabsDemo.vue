<template>
  <h1>Tab示例1</h1>
  因为使用的key值为title，所以Tab组件的title不能重复，不然会出现问题
  <Tabs selected="导航1">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue'
import Tabs from '../lib/Tabs.vue'
export default {
 components:{Tabs,Tab},
 setup(){
  
 }
}
</script>

<style>

</style>