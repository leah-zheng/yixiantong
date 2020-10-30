<template>
    <div class="comment-bd">
        <detail-title
            icon="icon-haoping"
            title="评论关键词"
        ></detail-title>
        <div class="comment-keyword">
            <span class="keyword"
                v-for="(item,index) of commentKeyword"
                :key="index">{{item}}</span>
        </div>
    </div>
</template>
<script>
import DetailTitle from './Tab'
export default {
    name:'DetailCommentKeyword',
    components:{
        DetailTitle
    },
    props:{
        commentKeyword:Array
    }
}
</script>
<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixin.scss';
    .comment-bd{
        @include flex-column;
        margin-top: .1rem;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        box-sizing: border-box;
        
        .comment-keyword{
            @include flex-row;
            flex-wrap: wrap;
            padding: .1rem .15rem;
            font-size: .18rem;
            box-sizing: border-box;
        }

        .keyword{
            @include vh-center;
            height: .25rem;
            padding: 0 .05rem;
            margin: 0 .05rem .05rem 0;
            border: 1px solid $defaultGreen;
            border-radius: .03rem;
            color: $defaultGreen;

        }
    }
</style>