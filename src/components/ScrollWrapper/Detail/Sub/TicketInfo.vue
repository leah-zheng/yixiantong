<template>
    <div class="ticket-bd">
        <detail-title
            icon="icon-intro"
            title="购票信息"
        ></detail-title>
        <div class="ticket-content">{{ticket}}</div>
    </div>
</template>
<script>
import DetailTitle from './Tab';
export default {
    name:'DetailTicketInfo',
    components:{
        DetailTitle
    },
    props:{
        ticket:{
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
   .ticket-bd{
       @include flex-column;
       margin-top: .1rem;
       border-bottom: 1px solid #ddd;
       box-sizing: border-box;
       background-color: #fff;
       .ticket-content{
           padding: .1rem .15rem;
           font-size: .14rem;
           line-height: .18rem;
           
       }
   }
</style>