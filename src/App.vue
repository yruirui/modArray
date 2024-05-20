<template>
  <router-link to="/" >tina</router-link>
  <router-link to="/tina2" >tina2</router-link>
  <hr />
  <router-view/>
  
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
