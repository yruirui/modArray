<template>
  <div>
    <div class="topnavBanner">
      <Topnav />
      <div class="banner">
        <h1>momoUI</h1>
        <h2>自己封装的组件库</h2>
        <p class="action">
          <router-link to="/doc"
            ><div class="starButton">开始</div></router-link
          >
          <a
            ><div class="starButton">
              <a href="http://github.com">github</a>
            </div></a
          >
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于vue3</h3>
          <p>使用了vue3的 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <h3>基于Typescript</h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-tubiaozhizuomoban"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style lang="scss" scope>
$green: #02bcd0;
$color: #28d1c9;
.topnavBanner {
  background: rgb(66, 255, 253);
  background: linear-gradient(
    145deg,
    rgba(66, 255, 253, 1) 0%,
    rgba(231, 233, 230, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $color;

  > action {
    padding: 8px 0;
  }
}

.starButton {
  width: 60px;
  background-color: $green;
  text-align: center;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 5px;
  color: white;
  padding: 10px 0px;
}
.features {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px;
      display: grid;
      justify-content: start;
      align-content: center;
      grid-template-areas: "icon title" "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>