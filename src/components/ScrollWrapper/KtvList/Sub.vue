<template>
    <div class="ktv-item">
        <router-link
            :to="{path:'/detail',query:{field:'ktv',id:data.id}}">
            <div class="img">
                <img class="ktv-img" :src="data.img" :alt="data.name">
            </div>
            <div class="info">
                <p class="title">{{data.name}}</p>
                <div class="stars">
                    <stars :starNum="Number(data.star)"></stars>
                    <span class="score">{{data.score}}分</span>
                </div>
                <p class="others">
                    <span class="item">￥
                        <span class="price">{{data.default_price}}</span> 元
                    </span>   
                    <span class="item">{{data.city_name}}</span>   
                </p>
            </div>
        </router-link>
    </div>
</template>
<script>
import Stars from '../Sub/Stars'
export default {
    name:'KtvListSub',
    props:{
        data:Object
    },
    components:{
        Stars
    }
}
</script>
<style lang="scss" scoped>
     @import '~styles/mixin.scss';
 @import '~styles/variables.scss';
    .ktv-item{
        position: relative;
        background-color: #fff;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;

        .img{
            width: 1.2rem;
            height: 1.2rem;
            padding: .1rem;
            .ktv-img{
                width: 100%;
                height: 100%;
            }
        }

        .info{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding: .1rem .1rem 0 1.4rem;
            box-sizing: border-box;
            .title{
                @include ellipse;
                font-size: .18rem;
                line-height: .25rem;
                margin-bottom: .05rem;
            }
            .stars{
                .score{
                    font-size: .14rem;
                    color: $starColor;
                }
            }
            .others{
                display: flex;
                justify-content: space-between;
                margin-top: .35rem;
                .item{
                    font-size: .14rem;
                    &:nth-child(1){
                        

                        .price{
                            font-size: .2rem;
                            color: $defaultGreen;
                        }
                    }
                }
                
            }
        }
    }
</style>