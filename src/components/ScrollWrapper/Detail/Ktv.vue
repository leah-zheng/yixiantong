<template>
    <div class="detail-wrapper">
        <detail-name :name="name"></detail-name>
        <detail-stars :score="score" :starNum="starNum"></detail-stars>
        <detail-address :address="address"></detail-address>
        <detail-price :price="price"></detail-price>
        <detail-server :server="server"></detail-server>
    </div>
</template>
<script>
import DetailName from './Sub/Name';
import DetailStars from './Sub/Stars';
import DetailAddress from './Sub/Address';
import DetailPrice from './Sub/Price';
import DetailServer from './Sub/Server';

export default {
    name:'DetailKtv',
    components:{
        DetailName,
        DetailStars,
        DetailAddress,
        DetailPrice,
        DetailServer
        
    },
    props:{
        name:String,
        starNum:Number,
        score:String,
        address:String,
        price:Number,
        opentime:String,
        commentKeyword:Array,
        server:Object
    }
}
</script>
<style lang="scss" scoped>
    
</style>