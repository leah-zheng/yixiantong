<template>
    <div class="opentime-bd">
        <span class="iconfont icon-datetime"></span>
        <span class="opentime-text">{{opentime}}</span>
    </div>
</template>
<script>
export default {
    name:'DetailOpenTime',
    props:{
        opentime:{
            type:String,
            default(){
                return '时间加载中...'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .opentime-bd{
        display: flex;
        align-items: center;
        min-height: .44rem;
        padding: .1rem .15rem ;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        line-height: .2rem;
        box-sizing: border-box;
        .icon-datetime{
            font-size: .18rem;
            color: #999;
        }
        .opentime-text{
            font-size: .16rem;
            padding-left: .15rem;
        }
    }
</style>