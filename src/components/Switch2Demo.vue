<demo>
  支持disabled
</demo>
<template>
  <Switch v-model:value="bool" disabled />
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: { Switch },
  setup() {
    const bool = ref(true);
    return { bool };
  },
};
</script>

<style>
</style>