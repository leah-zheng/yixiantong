<template>
    <div class="intro-bd">
        <detail-title
            icon="icon-intro"
            title="详细介绍"
        ></detail-title>
        <div class="intro-content">{{intro}}</div>
    </div>
</template>
<script>
import DetailTitle from './Tab';
export default {
    name:'DetailIntro',
    components:{
        DetailTitle
    },
    props:{
        intro:{
            type:String,
            default(){
                return '加载中...'
            }
        },
    }
}
</script>
<style lang="scss" scoped>
   @import '~styles/mixin.scss';
   .intro-bd{
       @include flex-column;
       margin-top: .1rem;
       border-bottom: 1px solid #ddd;
       box-sizing: border-box;
       background-color: #fff;
       .intro-content{
           padding: .1rem .15rem;
           font-size: .14rem;
           line-height: .18rem;
           text-indent: 2em;
       }
   }
</style>