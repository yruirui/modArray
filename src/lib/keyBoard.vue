<template>
  <div class="container">
    <p>
      {{ Title
      }}<span class="input" @click="elementClick" :class="{ focus: isActive }"
        >{{ aa }}
      </span>
    </p>
    <button @click="$emit('someEvent', aa)">点击我获取当前input的值</button>
  </div>

  <div class="keyboard" :class="{ show: isActive }" @click="keyClick">
    <div class="page page-lowercase">
      <div class="row">
        <span class="col-2 active" data-type="char">q</span>
        <span class="col-2" data-type="char">w</span>
        <span class="col-2" data-type="char">e</span>
        <span class="col-2" data-type="char">r</span>
        <span class="col-2" data-type="char">t</span>
        <span class="col-2" data-type="char">y</span>
        <span class="col-2" data-type="char">u</span>
        <span class="col-2" data-type="char">i</span>
        <span class="col-2" data-type="char">o</span>
        <span class="col-2" data-type="char">p</span>
      </div>
      <div class="row">
        <span class="col-2 offset-1">a</span>
        <span class="col-2" data-type="char">s</span>
        <span class="col-2" data-type="char">d</span>
        <span class="col-2" data-type="char">f</span>
        <span class="col-2" data-type="char">g</span>
        <span class="col-2" data-type="char">h</span>
        <span class="col-2" data-type="char">j</span>
        <span class="col-2" data-type="char">k</span>
        <span class="col-2" data-type="char">l</span>
      </div>
      <div class="row">
        <span class="col-3" data-type="uppercase">lock</span>
        <span class="col-2" data-type="char">z</span>
        <span class="col-2" data-type="char">x</span>
        <span class="col-2" data-type="char">c</span>
        <span class="col-2" data-type="char">v</span>
        <span class="col-2" data-type="char">b</span>
        <span class="col-2" data-type="char">n</span>
        <span class="col-2" data-type="char">m</span>
        <span class="col-3" data-type="backspace">detele</span>
      </div>
      <div class="row">
        <span class="col-4" data-type="number">123</span>
        <span class="col-12" data-type="space">space</span>
        <span class="col-4" data-type="return">return</span>
      </div>
    </div>

    <div class="page page-uppercase">
      <div class="row">
        <span class="col-2" data-type="char">Q</span>
        <span class="col-2" data-type="char">W</span>
        <span class="col-2" data-type="char">E</span>
        <span class="col-2" data-type="char">R</span>
        <span class="col-2" data-type="char">T</span>
        <span class="col-2" data-type="char">Y</span>
        <span class="col-2" data-type="char">U</span>
        <span class="col-2" data-type="char">I</span>
        <span class="col-2" data-type="char">O</span>
        <span class="col-2" data-type="char">P</span>
      </div>
      <div class="row">
        <span class="col-2 offset-1" data-type="char">A</span>
        <span class="col-2" data-type="char">S</span>
        <span class="col-2" data-type="char">D</span>
        <span class="col-2" data-type="char">F</span>
        <span class="col-2" data-type="char">G</span>
        <span class="col-2" data-type="char">H</span>
        <span class="col-2" data-type="char">J</span>
        <span class="col-2" data-type="char">K</span>
        <span class="col-2" data-type="char">L</span>
      </div>
      <div class="row">
        <span class="col-3" data-type="lowercase">lock </span>
        <span class="col-2" data-type="char">Z</span>
        <span class="col-2" data-type="char">X</span>
        <span class="col-2" data-type="char">C</span>
        <span class="col-2" data-type="char">V</span>
        <span class="col-2" data-type="char">B</span>
        <span class="col-2" data-type="char">N</span>
        <span class="col-2" data-type="char">M</span>
        <span class="col-3" data-type="backspace"> delete</span>
      </div>
      <div class="row">
        <span class="col-4" data-type="number">123</span>
        <span class="col-12" data-type="space">space</span>
        <span class="col-4" data-type="return">return</span>
      </div>
    </div>
    <div class="page page-number">
      <div class="row">
        <span class="col-2" data-type="char">1</span>
        <span class="col-2" data-type="char">2</span>
        <span class="col-2" data-type="char">3</span>
        <span class="col-2" data-type="char">4</span>
        <span class="col-2" data-type="char">5</span>
        <span class="col-2" data-type="char">6</span>
        <span class="col-2" data-type="char">7</span>
        <span class="col-2" data-type="char">8</span>
        <span class="col-2" data-type="char">9</span>
        <span class="col-2" data-type="char">0</span>
      </div>
      <div class="row">
        <span class="col-2 offset-1" data-type="char">-</span>
        <span class="col-2" data-type="char">/</span>
        <span class="col-2" data-type="char">:</span>
        <span class="col-2" data-type="char">;</span>
        <span class="col-2" data-type="char">(</span>
        <span class="col-2" data-type="char">)</span>
        <span class="col-2" data-type="char">$</span>
        <span class="col-2" data-type="char">&</span>
        <span class="col-2">@</span>
      </div>
      <div class="row">
        <span class="col-3" data-type="symbol">#+=</span>
        <span class="col-2" data-type="char">.</span>
        <span class="col-2" data-type="char">,</span>
        <span class="col-2" data-type="char">?</span>
        <span class="col-2" data-type="char">!</span>
        <span class="col-2" data-type="char">'</span>
        <span class="col-2" data-type="char">"</span>
        <span class="col-2" data-type="char">\`</span>
        <span class="col-3" data-type="backspace">delete </span>
      </div>
      <div class="row">
        <span class="col-4" data-type="uppercase">ABC</span>
        <span class="col-12" data-type="space">space</span>
        <span class="col-4" data-type="return">return</span>
      </div>
    </div>
    <div class="page page-symbol">
      <div class="row">
        <span data-type="char" class="col-2">[</span>
        <span data-type="char" class="col-2">]</span>
        <span data-type="char" class="col-2">{</span>
        <span data-type="char" class="col-2">}</span>
        <span data-type="char" class="col-2">#</span>
        <span data-type="char" class="col-2">%</span>
        <span data-type="char" class="col-2">^</span>
        <span data-type="char" class="col-2">*</span>
        <span data-type="char" class="col-2">+</span>
        <span data-type="char" class="col-2">=</span>
      </div>
      <div class="row">
        <span data-type="char" class="col-2 offset-1">_</span>
        <span data-type="char" class="col-2">\</span>
        <span data-type="char" class="col-2">|</span>
        <span data-type="char" class="col-2">~</span>
        <span data-type="char" class="col-2">Valid character: &lt;</span>
        <span data-type="char" class="col-2">></span>
        <span data-type="char" class="col-2">¥</span>
        <span data-type="char" class="col-2">€</span>
        <span data-type="char" class="col-2">￡</span>
      </div>
      <div class="row">
        <span data-type="number" class="col-3">123</span>
        <span data-type="char" class="col-2">.</span>
        <span data-type="char" class="col-2">,</span>
        <span data-type="char" class="col-2">?</span>
        <span data-type="char" class="col-2">!</span>
        <span data-type="char" class="col-2">'</span>
        <span data-type="char" class="col-2">"</span>
        <span data-type="char" class="col-2">\`</span>
        <span data-type="backspace" class="col-3">delete</span>
      </div>
      <div class="row">
        <span data-type="lowercase" class="col-4">ABC</span>
        <span data-type="space" class="col-12">space</span>
        <span data-type="return" class="col-4">return</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  props: {
    Title: { type: String, default: "请输入账号" },
  },

  setup() {
    const isActive = ref(false);
    const aa = ref("");
    const a = () => {};
    const elementClick = (el) => {
      isActive.value = !isActive.value;
      el.stopPropagation();
    };
    const keyClick = (e) => {
      e.stopPropagation();
      const a = e.target;
      const type = a.getAttribute("data-type");

      switch (type) {
        case "char":
          aa.value += a.innerHTML;
          break;
        case "space":
          aa.value += " ";

          break;
        case "return":
          aa.value += "\n";

          break;
        case "backspace":
          aa.value = aa.value.substr(0, aa.value.length - 1);

          break;
        case "uppercase":
          setPage("uppercase");
          break;
        case "lowercase":
          setPage("lowercase");
          break;
        case "number":
          setPage("number");
          break;
        case "symbol":
          setPage("symbol");
          break;
      }
    };
    const upContent = () => {};
    const setPage = (name) => {
      if (document.querySelector(".keyboard")) {
        let elements: NodeListOf<HTMLElement> =
          document.querySelectorAll(".page");
        elements.forEach((element: HTMLElement) => {
          element.style.display = "none";
        });
        let qq: HTMLElement | null = document.querySelector(".page-" + name);
        if (qq !== null) {
          qq.style.display = "block";
        }
      }
    };

    return { elementClick, isActive, keyClick, aa, setPage, upContent, a };
  },
};
</script>

<style>
.input {
  border: 1px solid #ccc;
  padding: 2px;
  border-radius: 4px;
  line-height: 20px;
  width: 150px;
  min-height: 20px;
  display: inline-block;
  white-space: pre-line;
}
.input.focus::after {
  content: "|";
  font-size: 14px;
  animation: dance 1s linear infinite;
}
@keyframes dance {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  99% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.keyboard {
  background-color: #eb2e6a;
  position: fixed;
  width: 100%;
  max-width: 600px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
  opacity: 0;
  transition: all 0.3s;
}
.keyboard.show {
  transform: translateX(-50%) translateY(0%);
  opacity: 1;
}
.keyboard .page.page-lowercase {
  display: block;
}
.page {
  color: #fffafa;
  padding: 10px;
  display: none;
}
.row {
  display: flex;
}
.keyboard .row > span {
  height: 40px;
  background-color: #4b4747;
  border-radius: 4px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -2px 0 2px 0 #fffafa;
}
.keyboard .row > span.active {
  background: #888;
  color: #333;
}
.col-2 {
  width: 10%;
}
.col-3 {
  width: 15%;
}
.col-4 {
  width: 20%;
}
.col-12 {
  width: 60%;
}
.offset-1 {
}
</style>