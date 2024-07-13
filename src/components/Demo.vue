<template>
  <div class="demo">
    <h2>{{ component?.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-action">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre
        class="language-css"
        v-html="
          Prism.highlight(
            component?.__sourceCode,
            Prism.languages.javascript,
            'html'
          )
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import "prismjs";
import "prismjs/themes/prism-okaidia.css";

const Prism = (window as any).Prism;

export default {
  props: { component: Object },
  components: { Button },
  setup() {
    return { Prism };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-action {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    margin: 0;
  }
}
</style>