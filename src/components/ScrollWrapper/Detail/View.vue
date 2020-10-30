<template>
    <div class="detail-wrapper">
        <detail-name :name="name"></detail-name>
        <detail-stars :score="score" :starNum="starNum"></detail-stars>
        <detail-address :address="address"></detail-address>
        <detail-price :price="price"></detail-price>
        <detail-open-time :opentime="opentime"></detail-open-time>
        <detail-tip :tip="tip"></detail-tip>
        <detail-intro :intro="intro"></detail-intro>
        <detail-ticket-info :ticket="ticket"></detail-ticket-info>
    </div>
</template>
<script>
import DetailName from './Sub/Name';
import DetailStars from './Sub/Stars';
import DetailAddress from './Sub/Address';
import DetailPrice from './Sub/Price';
import DetailOpenTime from './Sub/OpenTime';
import DetailTip from './Sub/Tip';
import DetailIntro from './Sub/Intro';
import DetailTicketInfo from './Sub/TicketInfo'
export default {
    name:'DetailView',
    components:{
        DetailName,
        DetailStars,
        DetailAddress,
        DetailPrice,
        DetailOpenTime,
        DetailTip,
        DetailIntro,
        DetailTicketInfo
    },
    props:{
        name:String,
        starNum:Number,
        score:String,
        address:String,
        price:Number,
        opentime:String,
        tip:String,
        intro:String,
        ticket:String
    }
}
</script>
<style lang="scss" scoped>
    
</style>