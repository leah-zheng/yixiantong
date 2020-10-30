<template>
    <div class="tip-bd">
        <span class="iconfont icon-tip"></span>
        <span class="tip-text">{{tip}}</span>
    </div>
</template> 
<script>
export default {
    name:'DetailTip',
    props:{
        tip:{
            type:String,
            default(){
                return '加载中...'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .tip-bd{
        display: flex;
        align-items: center;
        min-height: .44rem;
        padding: .1rem .15rem;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        line-height: .2rem;
        box-sizing: border-box;

        .icon-tip{
            font-size: .18rem;
            color: #999;
            margin-right: .1rem;
            
        }
        .tip-text{
            font-size: .14rem;
            line-height: .18rem;
            
        }
    }
</style>