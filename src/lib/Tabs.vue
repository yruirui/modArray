<template>
 <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
        <div @click="select(t)" class="gulu-tabs-nav-item" :class="{selected:t==selected}" v-for="(t ,index) in Titles" :key="index"  :ref="el=>{if(el) navItems[index]=el} ">{{ t }}</div>
        <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content" >
        <component  :is="current" /> 
    </div>
 </div>
</template>

<script lang="ts">
import { computed, ref,onMounted } from 'vue'
import Tab from '../lib/Tab.vue'
export default{
    props:{
        selected:{type:String}
    },
    setup(props,context){
       const navItems=ref<HTMLDivElement>([]) 
       const indicator=ref<HTMLDivElement>(null)
       onMounted(() => {
        const divs=navItems.value
        const result=divs.filter(div=>div.classList.contains('selected'))[0]
        const {width}=result.getBoundingClientRect()
        indicator.value.style.width=width+'px'
       })
       const defaults=context.slots.default!()
       defaults.forEach((tag)=>{
        if(tag.type!==Tab){
            throw new Error('Tabs的子标签必须是Tab')
        }
       })
       const current=computed(()=>{
        return defaults.filter((tag)=>{
        return tag.props!.title==props.selected
       })[0]}) 
       const Titles=defaults.map((tag)=>{
       if(tag.props){
        return tag.props.title;   
       }
       })
       const select=(title:String)=>{
        context.emit('update:selected',title)
       } 
       return{defaults,Titles,current,select,navItems,indicator}
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
        position: relative;
      &-item{
        padding:8px 0;
        margin: 0 16px;
        cursor:pointer;
      &:first-child{ margin-left: 0;}
      &.selected{color:$blue}
      }
      &-indicator{
        position:absolute;
        height:3px;
        background: $blue;
        left:0;
        bottom:-1px;
        width:100px
    }
    }
    &-content{ padding:8px 0}
    
}


</style>