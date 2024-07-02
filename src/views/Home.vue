<template>
    <div>
<div class="topnavBanner">
    <Topnav />
  <div class="banner">
   <h1>momoUI</h1>
   <h2>自己封装的组件库</h2>
   <div class="action">
    <router-link to="/doc"><div class="starButton">开始</div></router-link>
    <a><div class="starButton" a="http://github.com">github</div></a>
   </div>
  </div>
 </div>
     <div class="features">
        <svg class="icon" >
       <use xlink:href="#icon-tubiaozhizuomoban"></use>
      </svg>
      <svg class="icon" >
       <use xlink:href="#icon-typescript"></use>
      </svg>
      <svg class="icon" >
       <use xlink:href="#icon-Vue"></use>
      </svg>
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
$green:#02bcd0;
$color:#28d1c9;
.topnavBanner{
    background: rgb(66,255,253);
    background: linear-gradient(145deg, rgba(66,255,253,1) 0%, rgba(231,233,230,1) 100%, rgba(0,212,255,1) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
}
.banner{
    color: $color;
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
        background-color: $green;       
        text-align: center;
        float: left;
        margin-left: 10px;
        margin-top: 10px;
        border-radius: 5px;
        color: white;
        padding: 10px 0px;

    }
.features{
    >svg{
        width: 64px;
        height: 64px;
    }
}
</style>