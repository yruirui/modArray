<template>
  <div class="dialog-overlay"></div>
  <div  class="dialog-wrapper">
    <header>标题</header>
    <main>
        <p>one</p>
        <p>two</p>
    </main>
    <footer>
        <Button>ok</Button>
        <Button>cancel</Button>
    </footer>
  </div>
</template>

<script>
import Button from '../lib/Button.vue'
export default {
components:{Button}
}
</script>

<style>

</style>