<template>
    <div class="list-wrapper">
        <ktv-list-sub v-for="(item,index) of ktvDatas" :key="index" :data="item"></ktv-list-sub>
    </div>
</template>
<script>
import KtvListSub from './Sub'
export default {
    name:'KtvList',
    props:{
        ktvDatas:Array
    },
    components:{
        KtvListSub
    }
}
</script>
<style lang="scss" scoped>
    
</style>