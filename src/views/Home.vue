<template>
<div>
    <Topnav />
<div class="banner">
   <h1>momoUI</h1>
   <h2>自己封装的组件库</h2>
   <div class="action">
    <router-link to="/doc"><div class="starButton">开始</div></router-link>
    <a><div class="starButton">github</div></a>
   </div>
  </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components:{Topnav}

}
</script>

<style lang="scss" scope>
.banner{
    border:1px solid red;
    height: 100vh;
    >h1{
        padding-top: 40vh;
        text-align: center;
    }
    >h2{
       text-align:center
    }
    
    
}
.action{
    display: flex;
    align-items: center;
    justify-content: center;
}
.starButton{
        width: 60px;
        background-color: aquamarine;       
        text-align: center;
        float: left;
        margin-left: 10px;
        margin-top: 10px;

    }
</style>