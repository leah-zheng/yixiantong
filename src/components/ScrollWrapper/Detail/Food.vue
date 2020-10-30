<template>
    <div class="detail-wrapper">
        <detail-name :name="name"></detail-name>
        <detail-stars :score="score" :starNum="starNum"></detail-stars>
        <detail-address :address="address"></detail-address>
        <detail-price :price="price"></detail-price>
        <detail-open-time :opentime="opentime"></detail-open-time>
        <detail-recom :recom="recom"></detail-recom>
        <detail-comment-keyword :commentKeyword="commentKeyword"></detail-comment-keyword>
    </div>
</template>
<script>
import DetailName from './Sub/Name';
import DetailStars from './Sub/Stars';
import DetailAddress from './Sub/Address';
import DetailPrice from './Sub/Price';
import DetailOpenTime from './Sub/OpenTime';
import DetailRecom from './Sub/Recom';
import DetailCommentKeyword from './Sub/CommentKeyword'
export default {
    name:'DetailFood',
    components:{
        DetailName,
        DetailStars,
        DetailAddress,
        DetailPrice,
        DetailOpenTime,
        DetailRecom,
        DetailCommentKeyword
    },
    props:{
        name:String,
        starNum:Number,
        score:String,
        address:String,
        price:Number,
        opentime:String,
        recom:String,
        commentKeyword:Array
    }
}
</script>
<style lang="scss" scoped>
    
</style>