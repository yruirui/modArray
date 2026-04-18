<template>
  <div class="contentbody">
    <div class="loading">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<script lang="ts" >
export default {
  components: {},
  setup() {
    return {};
  },
};
</script>

<style scoped lang="scss">
$duration: 2s; //动画时间
$ballSize: 10px; //小球尺寸
$containerSize: 150px; // 容器尺寸
$n: 36; //小球的个数
$pDeg: 360deg / $n;
.contentbody {
  height: 100%;
  background-color: #66c7f4;
  border: 1px solid red;
}
.loading {
  width: $containerSize;
  height: $containerSize;

  margin: 50px auto;
  position: relative;
  border-radius: 50%;
  .dot {
    position: absolute;
    left: 50%;
    top: 0;
    width: $ballSize;
    height: $ballSize;
    margin-left: -$ballSize/2;
    margin-top: -$ballSize/2;
    perspective: 70px; //父元素设置景深，有近大远小的效果
    transform-style: preserve-3d; //父元素设置景深，有近大远小的效果
    transform-origin: center $ballSize/2 + $containerSize/2;
    @for $i from 1 through $n {
      &:nth-child(#{$i}) {
        transform: rotate(($i - 1) * $pDeg);
        &::after,
        &::before {
          animation-delay: -$duration / $n * ($i - 1) * 6;
        }
      }
    }
    &::before,
    &::after {
      content: " ";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    &::before {
      background: black;
      top: -100%;
      animation: move-black $duration infinite;
      @keyframes move-black {
        0% {
          animation-timing-function: ease-in;
        }
        25% {
          transform: translate3d(0, 100%, $ballSize);
          animation-timing-function: ease-out;
        }
        50% {
          transform: translate3d(0, 200%, 0);
          animation-timing-function: ease-in;
        }
        75% {
          transform: translate3d(0, 100%, -$ballSize);
          animation-timing-function: ease-out;
        }
      }
    }
    &::after {
      background: white;
      top: 100%;
      animation: move-white $duration infinite;
      @keyframes move-white {
        0% {
          animation-timing-function: ease-in;
        }
        25% {
          transform: translate3d(0, -100%, $ballSize);
          animation-timing-function: ease-out;
        }
        50% {
          transform: translate3d(0, -200%, 0);
          animation-timing-function: ease-in;
        }
        75% {
          transform: translate3d(0, -100%, $ballSize);
          animation-timing-function: ease-out;
        }
      }
    }
  }
}
</style>