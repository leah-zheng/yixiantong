<template>
    <div class="no-data-tip">
        <span class="tip-text">{{text}}</span>
    </div>
</template>
<script>
export default {
    name:'NoDataTip',
    data(){
        return {
            text:'— 没有搜索到关键词 —'
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~styles/mixin.scss';
.no-data-tip{
    @include vh-center;
    height: 4rem;
    .tip-text{
        font-size: .14rem;
        color: #999;
    }
}
</style>