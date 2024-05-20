<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <tina />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import tina from './components/tina.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    tina
  }
}
</script>
