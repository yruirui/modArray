<template>
 <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref='container'>
        <div @click="select(t)" class="gulu-tabs-nav-item"
         :class="{selected:t==selected}"
          v-for="(t ,index) in Titles" :key="index" 
           :ref="el=>{if(t==selected) selectedItem=el} ">{{ t }}</div>
        <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content" >
        <component  :is="current" /> 
    </div>
 </div>
</template>

<script lang="ts">
import { computed, ref, watchEffect , onUpdated,} from 'vue'
import Tab from '../lib/Tab.vue'
export default{
    props:{
        selected:{type:String}
    },
    setup(props,context){
       
        const selectedItem = ref < HTMLDivElement > (null)
       const indicator=ref<HTMLDivElement>(null)
       const container=ref<HTMLDivElement>(null)
       
      watchEffect(()=>{
        if (selectedItem.value){
            const {width}=selectedItem.value.getBoundingClientRect()
            indicator.value.style.width=width+'px'
            const {left:left1}=container.value.getBoundingClientRect()
            const {left:left2}=selectedItem.value.getBoundingClientRect()
            const left=left2-left1
            indicator.value.style.left=left+'px'
        } 
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
       return{defaults,
        Titles,
        current,
        select,
        selectedItem,
        indicator,
        container}
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
        width:100px;
        transition: all 250ms;
    }
    }
    &-content{ padding:8px 0}
    
}


</style>