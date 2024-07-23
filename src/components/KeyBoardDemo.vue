<template>
  <Demo :component="keyBoartDemo1"></Demo>
</template>

<script>
import Demo from "./Demo.vue";
import keyBoartDemo1 from "./keyBoartDemo1.vue";
export default {
  components: { Demo },
  setup() {
    return { keyBoartDemo1 };
  },
};
</script>

<style>
</style>