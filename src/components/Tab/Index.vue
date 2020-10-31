<template>
    <nav class="tab">
        <tab-sub 
            v-for="(item,index) of cityDatas"
            :cityInfo="item"
            :key="index"
        ></tab-sub>
    </nav>
</template>
<script>
import cityDatas from 'data/cities'
import TabSub from './Sub'
export default {
    name:"Tab",
    components:{
        TabSub
    },
    data(){
        return {
            cityDatas
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '~styles/mixin.scss';
    .tab{
        @include flex-row;
        flex-wrap: nowrap;
        height: .44rem;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
    }
</style>