<template>
    <div class="swiper-wrap">
        <swiper :options="swiperOption">
            <swiper-slide
                v-for="(item,index) of picDatas"
                :key="index"
            >
                <img class="swiper-img" :src="item" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
export default {
    name:'DetailSwiper',
    components:{
        swiper,
        swiperSlide
    },
    props:{
        picDatas:Array
    },
    data(){
        return{
            swiperOption:{
                pagination:{
                    el:'.swiper-pagination'
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~styles/variables.scss';
    .swiper-wrap >>> .swiper-pagination-bullet-active{
        background-color: $defaultGreen;
    }

    .swiper-slide{
        height: 2rem;
    }
    .swiper-img{
        height: 100%;
        width: 100%;
    }
</style>