<template>
    <div class="loading" v-show="loadingShow">
        <img class="loading-img" src="~@/assets/images/loading.gif" alt="">
    </div>
</template>
<script>
export default {
    name:'Loading',
    props:{
        loadingShow:{
            type:Boolean,
            default(){
                return true;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '~styles/mixin.scss';

    .loading{
        @include vh-center;
        height: 3rem;
        .loading-img{
            width: .8rem;
            height: .8rem;
        }
    }
</style>