<template>
    <div class="food-item">
        <router-link :to="{path:'/detail',query:{field:'food',id:data.id}}">
        <div class="img">
            <img class="food-img" :src="data.img" :alt="data.name">
        </div>
        <div class="info">
            <h1 class="title">{{data.name}}</h1>
            <p class="stars">
                <stars :starNum="Number(data.star)"></stars>
                <span class="price">{{data.default_price}}/人</span>
            </p>
            <p class="keyword">
                <span class="badge" 
                    v-for="(item,index) of data.keyword" :key="index">{{item}}</span>
            </p>
            <p class="other">
                <span class="item">{{data.field}}</span>
                <span class="item">{{data.area}}</span>
            </p>
        </div>
        </router-link>
    </div>
</template>
<script>
import Stars from 'components/ScrollWrapper/Sub/Stars'
export default {
    name:'FoodListSub',
    components:{
        Stars
    },
    props:{
        data:Object
    }
}
</script>
<style lang="scss" scoped>
    @import '~styles/mixin.scss';
    @import '~styles/variables.scss';
    .food-item{
        position: relative;
        border-bottom: 1px solid #ddd;
        background-color: #fff;

        .img{

            width: 1.2rem;
            height: 1.2rem;
            padding: .1rem;
            box-sizing: border-box;

            .food-img{
                width: 100%;
                height: 100%;
            }
        }

        .info{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding: .1rem .1rem 0 1.2rem;
            box-sizing: border-box;

            .title{
                @include ellipse;
                font-size: .18rem;
                color: #000;
                line-height: .2rem;
            }

            .stars{
                font-size: .14rem;
                line-height: .3rem;
                .price{
                    color: #333;
                }
            }
            .keyword{
                height: .3rem;
                line-height: .2rem;
                overflow: hidden;

                .badge{
                    margin-left: .05rem;
                    padding: 0 .05rem;
                    color: rgb(190,158,77);
                    background-color: rgb(251,244,228);
                    font-size: .14rem;
                }
            }
            .other{
                display: flex;
                justify-content: space-between;
                font-size: .14rem;
                line-height: .25rem;
            }
        }
    }
</style>