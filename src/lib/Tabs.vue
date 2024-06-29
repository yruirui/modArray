<template>
 <div>这里是tabs组件</div> 
 <div v-for="(t ,index) in Titles" :key="index" >{{ t }}</div>
 <component v-for='(c ,index) in defaults' :is="c"  :key="index"/>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue'
export default{
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

<style>

</style>