<template>
<div>
    <Topnav />
<div class="banner">
   <h1>momoUI</h1>
   <h2>自己封装的组件库</h2>
   <p class="action">
    <a>开始</a>
    <a>github</a>
   </p>
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


</style>