<template>
  <div class="topnav">
    <div class="log">log</div>
    <div class="menu"><span>菜单一</span><span>菜单二</span> </div>
  </div>
  <div class="banner">
   <h1>momoUI</h1>
   <h2>自己封装的组件库</h2>
   <p class="action">
    <a>开始</a>
    <a>github</a>
   </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
.topnav{
    height:30px;
    background-color: aquamarine;
    display: flex;
    justify-content: space-between;
    align-items:center;
    span{
       padding-right: 10px;
    }
}

</style>