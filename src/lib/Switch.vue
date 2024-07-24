<template>
  <button
    :class="{ 'gulu-checked': value }"
    @click="toggle"
    class="gulu-switch"
  >
    <span></span>
  </button>
  {{ value }}
</template>

<script lang="ts">
export default {
  props: { value: Boolean },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>

<style lang="scss" >
$h: 22px;
$h2: $h - 4px;
.gulu-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: gray;
  border-radius: calc($h / 2);
  position: relative;
}
.gulu-switch > span {
  position: absolute;
  top: 2px;
  left: 2px;
  width: $h2;
  height: $h2;
  background: lightcoral;
  border-radius: calc($h2 / 2);
  transition: left 250ms;
}
.gulu-switch.gulu-checked > span {
  left: calc(100% - #{$h2} - 2px);
}
.gulu-switch.gulu-checked {
  background: lightblue;
}
.gulu-switch::focus {
  outline: none;
}
.gulu-switch.gulu-checked:active {
  > span {
    width: $h2 + 4px;
    margin-left: -4px;
  }
}
.gulu-switch:active {
  > span {
    width: $h2 + 4px;
  }
}
</style>