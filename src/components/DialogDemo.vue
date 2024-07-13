<template>
  dialog组件
  <h1>示例1</h1>
  <Demo :component="DialogDemo1"></Demo>
  <h1>示例2</h1>
  <Demo :component="DialogDemo2"></Demo>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import DialogDemo1 from "./DialogDemo1.vue";
import DialogDemo2 from "./DialogDemo2.vue";
export default {
  components: { Demo },
  setup() {
    return { DialogDemo1, DialogDemo2 };
  },
};
</script>

<style>
</style>