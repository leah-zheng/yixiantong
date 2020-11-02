<template>
    <div class="scroll-wrapper" ref="wrapper">
        <div class="wrapper-content">
            <no-data-tip v-if="
                (!data.viewDatas || data.viewDatas.length <= 0)&&
                (!data.foodDatas || data.foodDatas.length <= 0)&&
                (!data.hotelDatas || data.hotelDatas.length <= 0)&&
                (!data.massageDatas || data.massageDatas.length <= 0)&&
                (!data.ktvDatas || data.ktvDatas.length <= 0)&&
                !(data&&data.status===-1)
            "></no-data-tip>
            <error :errorShow="!data||data.status===-1"></error>
            <div >
                <div v-if="data.viewDatas && data.viewDatas.length >0">
                <home-title :title="homeTitle.viewName"></home-title>
                <view-list :viewDatas="data.viewDatas"></view-list>
                </div>
                <div v-if="data.foodDatas && data.foodDatas.length >0">
                    <home-title :title="homeTitle.foodName"></home-title>
                    <food-list :foodDatas="data.foodDatas"></food-list>
                </div>
                <div v-if="data.hotelDatas && data.hotelDatas.length >0">
                    <home-title :title="homeTitle.hotelName"></home-title>
                    <hotel-list :hotelDatas="data.hotelDatas"></hotel-list>
                </div>
                <div v-if="data.massageDatas && data.massageDatas.length >0">
                    <home-title :title="homeTitle.massageName"></home-title>
                    <massage-list :massageDatas="data.massageDatas"></massage-list>
                </div>
                <div v-if="data.ktvDatas && data.ktvDatas.length >0">
                    <home-title :title="homeTitle.ktvName"></home-title>
                    <ktv-list :ktvDatas="data.ktvDatas"></ktv-list>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import BetterScroll from 'better-scroll';

import HomeTitle from './Sub/HomeTitle'
import ViewList from './ViewList/Index'
import FoodList from './FoodList/Index'
import HotelList from './HotelList/Index'
import KtvList from './KtvList/Index'
import MassageList from './MassageList/Index'
import NoDataTip from './Sub/NoDataTip'
import Error from './Sub/Error'
export default {
    name:'SearchScrollWrapper',
    data(){
        return {
            homeTitle:{
                viewName:'景点结果',
                foodName:'美食结果',
                hotelName:'酒店结果',
                massageName:'按摩结果',
                ktvName:'KTV结果'
            }
        }
    },
    components:{
        HomeTitle,
        ViewList,
        FoodList,
        HotelList,
        MassageList,
        KtvList,
        NoDataTip,
        Error
    },
    props:{
        data:Object
    },
    mounted(){
        this.scroll = new BetterScroll(this.$refs.wrapper);

    }
}
</script>
<style lang="scss" scoped>
    
</style>