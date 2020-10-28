<template>
    <div class="current-city">
        <span>当前城市：</span>
          <router-link :to="{name:path}">
          <span class="iconfont icon-positioning"></span>
          <span class="city">{{this.cityName}}</span>
         </router-link>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    name:'CurrentCity',
    data(){
        return{
            path:'Index'
        }
    },
    computed:{
        ...mapState(['cityName'])
    }
}
</script>
<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variables.scss';
    .current-city{
        @include flex-row;
        align-items: center;
        height: .5rem;
        padding-left: .15rem;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        font-size: .16rem;

        .iconfont{
            vertical-align: .005rem;
            color: $defaultBgColor;
        }

        .city{
            line-height: 1rem;
        }
    }
</style>