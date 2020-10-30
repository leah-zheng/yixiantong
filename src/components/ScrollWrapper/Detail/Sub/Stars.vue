<template>
    <div class="star-bd">
        <span class="iconfont icon-smile"></span>
        <stars :starNum="starNum"></stars>
        <span class="score">{{score}}分</span>
    </div>
</template>
<script>
import Stars from 'components/ScrollWrapper/Sub/Stars'
export default {
    name:'DetailStars',
    components:{
        Stars
    },
    props:{
        score:{
           type:String,
           default(){
               return '0.0'
           } 
        },
        starNum:{
            typr:Number,
            default(){
                return 0
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';

    .star-bd{
        display: flex;
        height: .44rem;
        padding: .03rem .15rem 0;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        box-sizing: border-box;
        .icon-smile{
            font-size: .18rem;
            margin: .08rem .1rem 0 0;
            color: #999;
        }
        .score{
            font-size: .16rem;
            margin: .1rem 0 0 .15rem;
            color: $defaultOrange;
        }
    }
</style>