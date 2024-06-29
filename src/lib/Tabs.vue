<template>
 <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
        <div class="gulu-tabs-nav-item" :class="{selected:t==selected}" v-for="(t ,index) in Titles" :key="index" >{{ t }}</div>
    </div>
    <div class="gulu-tabs-content" >
        <component v-for='(c ,index) in defaults' :is="c"  :key="index"/> 
    </div>
 </div>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue'
export default{
    props:{
        selected:{type:String}
    },
    setup(props,context){
       const defaults=context.slots.default!()
       defaults.forEach((tag)=>{
        if(tag.type!==Tab){
            throw new Error('Tabs的子标签必须是Tab')
        }
       })
       const Titles=defaults.map((tag)=>{
       if(tag.props){
        return tag.props.title;
        
       }
       })
        return{defaults,Titles}
    }
}
</script>

<style lang="scss">
$blue:#40a9ff;
$color:#333;
$border-color:#d9d9d9;

.gulu-tabs{
    &-nav{
        display:flex;
        color: $color;
        border-bottom:1px solid $border-color;
      &-item{
        padding:8px 0;
        margin: 0 16px;
        cursor:pointer;
      &:first-child{ margin-left: 0;}
      &.selected{color:$blue}
      }
    }
    &-content{ padding:8px 0}
}


</style>