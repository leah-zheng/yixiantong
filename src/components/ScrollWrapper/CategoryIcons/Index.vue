<template>
    <div class="icons-wrapper">
        <category-icons-sub
            v-for="(item,index) of itemList"
            :key="index"
            :bgColor=item.bgColor
            :icon=item.icon
            :field=item.field
            :iconText=item.iconText
        ></category-icons-sub>
       
    </div>
</template>
<script>
import CategoryIconsSub from './Sub'
import fieldDates from 'data/fields'
export default {
    name:'CategoryIcons',
    components:{
        CategoryIconsSub
    },
    data(){
        return{
           itemList:fieldDates 
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variables.scss';
    .icons-wrapper{
        @include flex-row;
        flex-wrap: wrap;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
    }
</style>