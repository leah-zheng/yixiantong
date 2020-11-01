<template>
    <div class="scroll-wrapper" ref="wrapper">
        <div class="scroll-content">
            <div v-if="!errorShow">
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
                <detail-ktv
                    v-if="field === 'ktv'"
                    :name="detailData.name"
                    :score="detailData.score"
                    :starNum="Number(detailData.star)"
                    :address="detailData.address"
                    :opentime="detailData.open_datetime"
                    :price="Number(detailData.default_price)"
                    :server="detailData.service"
                ></detail-ktv>
                <detail-massage
                    v-if="field === 'massage'"
                    :name="detailData.name"
                    :score="detailData.score"
                    :starNum="Number(detailData.star)"
                    :address="detailData.address"
                    :price="Number(detailData.default_price)"
                    :commentKeyword="detailData.comment_keyword"
                    :server="detailData.service"
                ></detail-massage>
            </div>
            <error :errorShow="errorShow"></error>
        </div>
    </div>
</template>
<script>
import BetterScroll from 'better-scroll';
import DetailSwiper from './Sub/Swiper';
import DetailFood from './Detail/Food'
import DetailView from './Detail/View'
import DetailHotel from './Detail/Hotel'
import DetailKtv from './Detail/Ktv';
import DetailMassage from './Detail/Massage';
import Error from './Sub/Error'

import {DetailModel} from 'models/detail';
import tools from 'utils/tools'
export default {
    name:'DetailScrollWrapper',
    data(){
        return {
            errorShow:false,
            field:'',
            id:0,
            detailData:{},
            currentField:''
        }
    },
    components:{
        DetailSwiper,
        DetailFood,
        DetailView,
        DetailHotel,
        DetailKtv,
        DetailMassage,
        Error
    },
    mounted(){
        this.scroll = new BetterScroll(this.$refs.wrapper);
        this.field = this.$route.query.field;
        this.id = this.$route.query.id;
        this.getDetail(this.field,this.id);
        
    },
    activated(){
        this.currentField = this.$route.query.field;
        this.currentId = this.$route.query.id;

        if(this.currentField !== this.field || this.currentId !== this.id){
            this.field = this.currentField;
            this.id = this.currentId;

            this.getDetail(this.field,this.id);
        }
    },
    methods:{
        getDetail(field,id){
            const detailModel = new DetailModel();
            detailModel.getDetail(field,id).then((res)=>{
                if(res && res.status === 0){
                    const data = res.data;
                    
                    this.errorShow = false;
                    data.pics && (data.pics = tools.jsonToArr(data.pics));
                    data.comment_keyword && (data.comment_keyword = tools.strToArr(data.comment_keyword));
                    data.recom && (data.recom = tools.replaceToSpace(data.recom));
                    data.service && (data.service = tools.jsonToArr(data.service));

                    this.detailData = data;
                    console.log(this.detailData);
                }else{
                    this.errorShow = true;
                    console.log({
                        'ErrorStatus':res.status,
                        'ErrorMsg':res.error
                    });
                }
            })
        }
    }
    }
</script>
<style lang="scss" scoped>
    
</style>