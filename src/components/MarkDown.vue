<template>
  <article class="markdown-body" v-html="content"></article>
</template>
    
<script lang="ts">
import { ref } from "vue";

export default {
  props: {
    path: {
      type: String,
      require: true,
    },
  },
  setup(props) {
    const content = ref<String>("");
    import(props.path!).then((result) => {
      content.value = result.default;
    });
    return {
      content,
    };
  },
};
</script>
    
    <style>
</style>