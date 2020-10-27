<template>
    <div class="back-ward" @click="onRouterBack">
        <span class="iconfont icon-header-arrow-left"></span>
    </div>
</template>
<script>

export default {
    name:'BacWard',
    methods:{
        onRouterBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '~styles/mixin.scss';
    @import '~styles/variables.scss';
    .back-ward{
        position: absolute;
        left: 0;
        top: 0;
        @include flex-row;
        @include vh-center;
        width: $headerHeight;
        height: $headerHeight;

        .iconfont {
            font-size: .2rem;
        }
    }
</style>