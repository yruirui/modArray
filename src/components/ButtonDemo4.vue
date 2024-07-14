<demo >>Button的禁用样式</demo>
<template>
  <div>
    <Button theme="button" :disabled="true">禁用按钮</Button>
    <Button theme="link" disabled>禁用按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
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