<template>
  <div>
    <topnav toggleMenuButtonVisible />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li><router-link to="/doc/intro">介绍</router-link></li>
          <li><router-link to="/doc/install">安装</router-link></li>
          <li><router-link to="/doc/get-start">开始</router-link></li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">BUtton组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tab">Tabs组件</router-link>
          </li>
          <li>
            <router-link to="/doc/keyBoardDemo">键盘组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tab">验证码组件</router-link>
          </li>
          <li><router-link to="/doc/tab">图标组件</router-link></li>
          <li>
            <router-link to="/doc/tab">布局组件</router-link>
          </li>
        </ol>
      </aside>
      <main><router-view></router-view></main>
    </div>
  </div>
</template>


<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";

export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<Boolean>>("xxx");
    return { menuVisible };
  },
};
</script>

<style lang='scss' scoped>
.content {
  display: flex;
  height: 100vh;

  > aside {
    flex-direction: column;
    overflow-y: auto;
  }
  > main {
    flex-grow: 1;
    flex-direction: column;
    margin-left: 20px;
    overflow-y: auto;
  }
}
aside {
  background: lightblue;
  width: 150px;
  padding: 16px 0;
  z-index: 1;
  > h2 {
    padding: 0 16px;
  }
  > ol > li {
    > a {
      display: block;
      padding: 4px 16px;
    }

    .router-link-active {
      background: white;
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 50px;
  }
}
</style>