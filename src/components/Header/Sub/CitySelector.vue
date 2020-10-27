<template>
    <div class="city">
       <router-link to="City">
            <span class="city-name">
            {{this.CityName}}
            </span>
            <span class="iconfont icon-header-arrow"></span>
       </router-link>
    </div>
</template>
<script>
export default {
    name:'CitySelector',
    data(){
        return{
            CityName:'全部'
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variables.scss';
    .city{
        width: .6rem;
        height: $headerHeight;
        a{
            @include flex-row;
            @include vh-center;
            height: $headerHeight;
            width: 100%;
            
            .city-name{
                font-size: .16rem;
                font-weight: blod;
            }

            .iconfont{
                font-size: .08rem;
                margin-left: .03rem;
            }
        }
    }
</style>