<template>
 <button :class="{checked:x}" @click="toggelt"><span></span></button>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
setup(){
    const x=ref(false)
    const toggelt=()=>{
          x.value=!x.value
    }
    return{x,toggelt}
}
}
</script>

<style lang="scss" scoped>
$h:22px;
$h2: $h - 4px;
button{
    height: $h;
    width: $h*2;
    border: none;
    background: gray;
    border-radius:  calc($h / 2);
    position: relative;
}
span{
    position: absolute;
    top:2px;
    left: 2px;
    width: $h2;
    height: $h2;
    background:lightcoral ;
    border-radius:  calc($h2 / 2);
    transition:left 250ms;
}
button.checked > span{
    left:calc(100% - #{$h2} - 2px)
}
button.checked{
    background: lightblue;
}
</style>