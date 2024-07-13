<template>
  <div>
    <h1>Switch组件示例</h1>
    <Demo :component="Switch1Demo"></Demo>

    <Demo :component="Switch2Demo"></Demo>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

import Switch1Demo from "../components/switch1Demo.vue";
import Switch2Demo from "../components/switch2Demo.vue";
import Demo from "./Demo.vue";

export default {
  components: { Demo },
  setup() {
    const bool = ref(true);

    return { bool, Switch1Demo, Switch2Demo };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-action {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    margin: 0;
  }
}
</style>