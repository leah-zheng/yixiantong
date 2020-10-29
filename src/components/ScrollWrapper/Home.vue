<template>
    <div class="scroll-wrapper" ref="wrapper">
        <div class="scroll-content">
            <category-icons></category-icons>
            <home-title :title='homeTitle.viewTitle'></home-title>
            <view-list :viewDatas='homeDatas.viewDatas'></view-list>
            <home-title :title='homeTitle.foodTitle'></home-title>
            <food-list :foodDatas='homeDatas.foodDatas'></food-list>
            <home-title :title='homeTitle.ktvTitle'></home-title>
            
            <home-title :title='homeTitle.hotelTitle'></home-title>
            <hotel-list :hotelDatas="homeDatas.hotelDatas"></hotel-list>
            <home-title :title='homeTitle.massageTitle'></home-title>
        </div>
       
    </div>
</template>
<script>
import BetterScroll from 'better-scroll';
import CategoryIcons from './CategoryIcons/Index';
import HomeTitle from './Sub/HomeTitle'
import ViewList from './ViewList/Index'
import FoodList from './FoodList/Index'
import HotelList from './HotelList/Index'
import tools from 'utils/tools'
import { mapState } from 'vuex';
import { IndexModel } from 'models/index';

export default {
    name:'HomeScrollWrapper',
    mounted(){
        this.scroll = new BetterScroll(this.$refs.wrapper);
        this.getHomeDatas(this.cityId)
    },
    components:{
        CategoryIcons,
        HomeTitle,
        ViewList,
        FoodList,
        HotelList
    },
    data(){
        return {
            homeTitle:{
                foodTitle:'推荐美食',
                hotelTitle:'推荐酒店',
                ktvTitle:'推荐KTV',
                massageTitle:'推荐按摩',
                viewTitle:'推荐景点'
            },
            homeDatas:{
                foodDatas:[],
                hotelDatas:[],
                ktvDatas:[],
                massageDatas:[],
                viewDatas:[]
            }
        }
    },
    computed:{
        ...mapState(['cityId'])
    },
    methods:{
        getHomeDatas(cityId){
            const indexModel = new IndexModel();

            indexModel.getHomeDatas(cityId).then(res => {

                if(res &&res.status == 0){
                    const data = res.data;
                    console.log(data);
                    this.homeDatas.foodDatas = tools.formatJSON(data.foodDatas,'keyword');
                    this.homeDatas.hotelDatas = data.hotelDatas;
                    this.homeDatas.ktvDatas = data.ktvDatas;
                    this.homeDatas.massageDatas = data.massageDatas;
                    this.homeDatas.viewDatas = data.viewDatas;
                    console.log(this.homeDatas.foodDatas);
                }
                
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>