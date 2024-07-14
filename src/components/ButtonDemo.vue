<template>
  <h1>这里是Button的示例</h1>

  <Demo :component="ButtonDemo1" />

  <Demo :component="ButtonDemo2" />

  <Demo :component="ButtonDemo3" />

  <Demo :component="ButtonDemo4" />

  <Demo :component="ButtonDemo5" />
</template>

<script lang="ts" >
import Demo from "./Demo.vue";
import Button from "../lib/Button.vue";
import ButtonDemo1 from "../components/ButtonDemo1.vue";
import ButtonDemo2 from "../components/ButtonDemo2.vue";
import ButtonDemo3 from "../components/ButtonDemo3.vue";
import ButtonDemo4 from "../components/ButtonDemo4.vue";
import ButtonDemo5 from "../components/ButtonDemo5.vue";
export default {
  components: { Button, Demo },
  setup() {
    return { ButtonDemo1, ButtonDemo2, ButtonDemo3, ButtonDemo4, ButtonDemo5 };
  },
};
</script>

<style>
</style>