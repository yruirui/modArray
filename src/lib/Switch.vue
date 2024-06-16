<template>
 <button :class="{checked:value}" @click="toggle"><span></span></button>
 {{ value }}
</template>

<script lang="ts">

export default {
    props:{value:Boolean},
    setup(props,context){
   
    const toggle=()=>{
          context.emit('update:value',!props.value)
    }
    return{toggle}
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
button::focus{
    outline:none
}
button.checked:active{
    >span{
        width:$h2+4px;
        margin-left: -4px;
    }
}
button:active{
    >span{
        width: $h2+4px;
    }
}
</style>