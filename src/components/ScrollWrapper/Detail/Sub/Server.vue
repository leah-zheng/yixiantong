<template>
    <div class="server-bd">
        <detail-title
            icon="icon-service"
            title="商家介绍"
        ></detail-title>
        <div class="server-content">
            <p>停车场：{{server && server.parking ? '有' :'无'}}</p>
            <p>WIFI：{{server && server.wifi ? '有' :'无'}}</p>
        </div>
    </div>
</template>
<script>
import DetailTitle from './Tab';
export default {
    name:'DetailServer',
    components:{
        DetailTitle
    },
    props:{
        server:{
            type:Object,
            default(){
                return {
                    parking:false,
                    wifi:false
                }
            }
        },
    }
}
</script>
<style lang="scss" scoped>
   @import '~styles/mixin.scss';
   .server-bd{
       @include flex-column;
       margin-top: .1rem;
       border-bottom: 1px solid #ddd;
       box-sizing: border-box;
       background-color: #fff;
       .server-content{
           padding: .1rem .15rem;
           font-size: .14rem;
           line-height: .18rem;
           
       }
   }
</style>