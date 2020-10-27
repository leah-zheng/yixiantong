<template>
    <div class="false-input">
        <router-link to="Search">
            <div class="input">
                <p class="placeholder">
                    <span class="iconfont icon-header-search"></span>
                    <span class="placeholder-text">{{placeholderText}}</span>
                </p>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name:'FalseInput',
    data(){
        return{
            placeholderText:'美食 / 景点 / 酒店 / 按摩 / KTV'
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variables.scss';
    .false-input{
        flex: 1;
        padding: .06rem .1rem .06rem 0;
        box-sizing: border-box;

        .input{
            @include flex-row;
            @include vh-center;
            width: 100%;
            height: 100%;
            background-color: #fff;
            border-radius: 5px;

            .placeholder{
                font-size: .14rem;
                color: #999;

                .iconfont{
                    font-size: .18rem;
                    vertical-align: -.02rem;
                    margin-right: .05rem;
                }
            }
        }
    }
</style>