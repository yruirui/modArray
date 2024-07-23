<template>
  <div>
    <h1>Switch组件示例</h1>
    <Demo :component="Switch1Demo"></Demo>

    <Demo :component="Switch2Demo"></Demo>
  </div>
</template>

<script lang="ts">
import Switch2Demo from "../components/switch2Demo.vue";
import Demo from "./Demo.vue";
import Switch1Demo from "../components/Switch1Demo.vue";

export default {
  components: { Demo },
  setup() {
    return { Switch1Demo, Switch2Demo };
  },
};
</script>

<style lang="scss" scoped>
</style>