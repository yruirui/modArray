<demo >Button的Size样式和Size加上theme的样式</demo>
<template>
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
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>

<style>
</style>