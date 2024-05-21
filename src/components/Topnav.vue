<template>
  <div class="topnav">
    <div class="log">logo</div>
    <div class="menu"><span>菜单一</span><span>菜单二</span> </div>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang='scss' scope>
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