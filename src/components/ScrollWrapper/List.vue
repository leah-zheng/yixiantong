<template>
    <div class="scroll-wrapper" ref="wrapper">
        <div class="scroll-content">
            <view-list v-if="field === 'view'" :viewDatas="listDatas"></view-list>
            <food-list v-if="field === 'food'" :foodDatas="listDatas"></food-list>
            <ktv-list v-if="field === 'ktv'" :ktvDatas="listDatas"></ktv-list>
            <massage-list v-if="field === 'massage'" :massageDatas="listDatas"></massage-list>
            <hotel-list v-if="field === 'hotel'" :hotelDatas="listDatas"></hotel-list>
        </div>
    </div>
</template>
<script>
import BetterScroll from 'better-scroll';
import { mapState } from 'vuex'

import ViewList from './ViewList/Index'
import FoodList from './FoodList/Index'
import HotelList from './HotelList/Index'
import MassageList from './MassageList/Index'
import KtvList from './KtvList/Index'

import tools from 'utils/tools'

import { ListModel } from 'models/list';
export default {
    name:'ListScrollWrapper',
    components:{
        ViewList,
        FoodList,
        HotelList,
        MassageList,
        KtvList
    },
    data(){
        return{
            listDatas:[]
        }
    },
    computed:{
        ...mapState(['cityId','field'])
    },
    mounted(){
        this.scroll = new BetterScroll(this.$refs.wrapper);
        this.getListDatas(this.cityId,this.field);
    },
    methods:{
        getListDatas(cityId,field){
            const listModel = new ListModel();
            
            listModel.getListDatas(cityId,field).then((res)=>{
                if(res && res.status == 0){
                    const data = tools.formatJSON(res.data,'keyword');
                    
                    this.listDatas = data;

                    
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>