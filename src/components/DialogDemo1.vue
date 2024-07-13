<demo>
    使用具名插槽来自定义title和主要内容
</demo>
<template>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:content>
      <div>hi</div>
      <div>hi!</div>
    </template>
    <template v-slot:Title>
      <strong>标签</strong>
    </template>
  </Dialog>
</template>

<script>
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);

    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return true;
    };
    const f2 = () => {
      return true;
    };
    return { x, toggle, f1, f2 };
  },
};
</script>

<style>
</style>