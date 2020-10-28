<template>
    <div class="list-wrapper">
        <city-list-sub
            v-for="(item,index) of CityList"
            :key="index"
            :cityInfo="item"
        ></city-list-sub>
    </div>
</template>
<script>
import CityListSub from './Sub';
import CityData from 'data/cities'
export default {
    name:'CityList',
    components:{
        CityListSub
    },
    data(){
        return{
            CityList:CityData
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>