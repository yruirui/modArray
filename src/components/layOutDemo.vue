<template>
  <Demo :component="layOut"></Demo>
</template>

<script>
import Demo from "./Demo.vue";
import layOut from "../lib/layOut.vue";
export default {
  components: { Demo },
  setup() {
    return { layOut };
  },
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
.HolyGrail {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

header,
footer {
  flex: 1;
  background-color: aqua;
}

.HolyGrail-body {
  display: flex;
  flex: 1;
  background-color: burlywood;
  min-height: 150px;
}

.HolyGrail-content {
  flex: 1;
  background-color: rgb(158, 109, 45);
}

.HolyGrail-nav,
.HolyGrail-ads {
  /* 两个边栏的宽度设为12em */
  flex: 0 0 12em;
  background-color: burlywood;
}

.HolyGrail-nav {
  /* 导航放到最左边 */
  order: -1;
  background-color: rgb(233, 135, 7);
}
@media (max-width: 768px) {
  .HolyGrail-body {
    flex-direction: column;
    flex: 1;
  }
  .HolyGrail-nav,
  .HolyGrail-ads,
  .HolyGrail-content {
    flex: auto;
  }
}
</style>