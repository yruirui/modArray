<demo>键盘组件</demo>
<template>
  <keyBoard :Title="Title" v-model:inputContent="y"></keyBoard>
</template>

<script lang="ts">
import { ref } from "vue";
import keyBoard from "../lib/keyBoard.vue";
export default {
  components: { keyBoard },
  setup() {
    const Title = "请输入密码";
    const y = ref("");
    return { Title, y };
  },
};
</script>

<style>
</style>