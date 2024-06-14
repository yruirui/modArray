<template>
  <div class="topnav">
    <div class="logo" @click="toggleMune">logo</div>
    <div class="menu"><span>菜单一</span><span>菜单二</span> </div>
    <span class="toggleAside"></span>
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
    background-color: aquamarine;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;
    justify-content: center;
    align-items: center;

  >.logo{
    max-width: 6rem;
    margin-right: auto;
  }
  >.menu{
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    >.li{
      margin: 0 1rem;
    }
  }
    
    @media (max-width:500px) {
      >.menu{
        display: none;
      }
      >.logo{
        margin: 0 auto;
      }
    }
}
</style>