<template>
    <div class="list-wrapper">
        <massage-list-sub 
            v-for="(item,index) of massageDatas" 
            :key="index"
            :data="item"
        ></massage-list-sub>
    </div>
</template>
<script>
import MassageListSub from './Sub'
export default {
    name:'MassageList',
    props:{
        massageDatas:Array
    },
    components:{
        MassageListSub
    }
}
</script>
<style lang="scss" scoped>
    
</style>