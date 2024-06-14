<template>
  <div class="topnav">
    <div class="log" @click="toggleMune">logo</div>
    <div class="menu"><span>菜单一</span><span>菜单二</span> </div>
  </div>
</template>

<script lang="ts">
import { inject,Ref } from 'vue'
export default {
setup(){
  const menuVisible=inject<Ref<boolean>>('xxx')
    console.log("topnav的menuVisible"+menuVisible?.value)
    const toggleMune=()=>{
      menuVisible!.value=!menuVisible!.value
    }
    return{toggleMune}
}
}
</script>

<style lang='scss' scope>
.topnav{
    height:30px;
    background-color: aquamarine;
    display: flex;
    justify-content: space-between;
    align-items:center;
    position: relative;
    z-index: 10;
    span{
       padding-right: 10px;
    }
}
</style>