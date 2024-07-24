<demo>键盘组件</demo>
<template>
  <keyBoard
    :Title="Title"
    v-model:inputContent="y"
    @some-event="callback"
  ></keyBoard>
  <span>当前输入的input的值：{{ y }}</span>
</template>

<script lang="ts">
import { ref } from "vue";
import keyBoard from "../lib/keyBoard.vue";
export default {
  components: { keyBoard },
  setup() {
    const Title = "请输入密码";
    const y = ref("");

    const callback = (e) => {
      y.value = e;
    };
    return { Title, y, callback };
  },
};
</script>

<style>
</style>