<template>
    <div class="scroll-wrapper" ref="wrapper">
        <div class="scroll-content">
            <detail-swiper :picDatas="detailData.pics"></detail-swiper>
            <detail-food 
                v-if="field === 'food'"
                :name="detailData.name"
                :score="detailData.score"
                :starNum="Number(detailData.star)"
                :address="detailData.address"
                :price="Number(detailData.default_price)"
                :opentime="detailData.open_datetime"
                :recom="detailData.recom"
                :commentKeyword="detailData.comment_keyword"
            ></detail-food>
            <detail-view
                v-if="field === 'view'"
                :name="detailData.name"
                :score="detailData.score"
                :starNum="Number(detailData.star)"
                :address="detailData.address"
                :price="Number(detailData.default_price)"
                :opentime="detailData.open_datetime"
                :tip="detailData.tip"
                :intro="detailData.intro"
                :ticket="detailData.ticket_info"
            ></detail-view>
            <detail-hotel
                v-if="field === 'hotel'"
                :name="detailData.name"
                :score="detailData.score"
                :starNum="Number(detailData.star)"
                :address="detailData.address"
                :price="Number(detailData.default_price)"
                :server="detailData.service"
            ></detail-hotel>
        </div>
    </div>
</template>
<script>
import BetterScroll from 'better-scroll';
import DetailSwiper from './Sub/Swiper';
import DetailFood from './Detail/Food'
import DetailView from './Detail/View'
import DetailHotel from './Detail/Hotel'


import {DetailModel} from 'models/detail';
import tools from 'utils/tools'
export default {
    name:'DetailScrollWrapper',
    data(){
        return {
            field:'',
            id:0,
            detailData:{}
        }
    },
    components:{
        DetailSwiper,
        DetailFood,
        DetailView,
        DetailHotel
    },
    mounted(){
        this.scroll = new BetterScroll(this.$refs.wrapper);
        this.field = this.$route.query.field;
        this.id = this.$route.query.id;
        this.getDetail(this.field,this.id);
        
    },
    methods:{
        getDetail(field,id){
            const detailModel = new DetailModel();
            detailModel.getDetail(field,id).then((res)=>{
                if(res && res.status === 0){
                    const data = res.data;

                    data.pics && (data.pics = tools.jsonToArr(data.pics));
                    data.comment_keyword && (data.comment_keyword = tools.strToArr(data.comment_keyword));
                    data.recom && (data.recom = tools.replaceToSpace(data.recom));
                    data.service && (data.service = tools.jsonToArr(data.service));

                    this.detailData = data;
                    console.log(this.detailData);
                }
            })
        }
    }
    }
</script>
<style lang="scss" scoped>
    
</style>