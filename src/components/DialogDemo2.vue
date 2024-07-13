<demo>
    用h函数来打开dialog
</demo>
<template>
  <Button @click="showDialog">show</Button>
</template>

<script>
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
import Dialog from "../lib/Dialog.vue";
export default {
  components: { Dialog, Button },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "你好",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { showDialog };
  },
};
</script>

<style>
</style>