<template>
    <div class="price-bd">
        <span class="iconfont icon-price"></span>
        <span class="price-text" :price="price">￥{{price||0}} 起</span>
    </div>
</template>
<script>
export default {
    name:'DetailPrice',
    props:{
        price:{
            type:Number,
            default(){
                return 0;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~styles/variables.scss';
    .price-bd{
        display: flex;
        height: .44rem;
        align-items: center;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        padding: .03rem .15rem 0;;
        box-sizing: border-box;
        .iconfont{
            font-size: .18rem;
            color: #000;
        }
        .price-text{
            font-size: .16rem;
            color: $defaultOrange;
            padding-left: .1rem;
        }
    }
</style>