
<template>
  <Demo :component="DateDEMO1"></Demo>
</template>

<script>
import DateDEMO1 from "./DateDEMO1.vue";
import Demo from "./Demo.vue";
export default {
  components: { Demo },
  setup() {
    return { DateDEMO1 };
  },
};
</script>

<style>
</style>