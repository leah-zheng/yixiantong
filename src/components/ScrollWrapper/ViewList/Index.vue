<template>
    <div class="list-wrapper">
        <view-list-sub
            v-for="(item,index) of viewDatas"
            :key="index"
            :data="item"
        ></view-list-sub>
    </div>
</template>
<script>
import ViewListSub from './Sub'
export default {
    name:'ViewList',
    components:{
        ViewListSub
    },
    props:{
        viewDatas:Array
    }
}
</script>
<style lang="scss" scoped>
    @import '~styles/mixin.scss';
    .list-wrapper{
        @include flex-row;
        flex-wrap: wrap;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
    }
</style>