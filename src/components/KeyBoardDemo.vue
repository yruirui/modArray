<template>
  <keyBoard :Title="Title" v-model:inputContent="y" v-model:value="bool" />
</template>

<script>
import { ref } from "vue";
import keyBoard from "../lib/keyBoard.vue";
export default {
  components: { keyBoard },
  setup() {
    const Title = "请输入密码";
    const y = ref("zaq");
    const bool = ref(true);

    return { Title, y, bool };
  },
};
</script>

<style>
</style>