<template>
  <h1>Tab示例1</h1>
  注意：因为使用的key值为title，所以Tab组件的title不能重复，
  <Demo :component="TabsDemo1"></Demo>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import TabsDemo1 from "../components/TabsDemo1.vue";
export default {
  components: { Demo },
  setup() {
    return { TabsDemo1 };
  },
};
</script>

<style>
</style>