<template>
    <div class="container">
        <common-header :title='title'></common-header>
        <tab></tab>
        <list-scroll-wrapper></list-scroll-wrapper>
        
    </div>
</template>
<script>
import CommonHeader from 'components/Header/Common';
import ListScrollWrapper from 'components/ScrollWrapper/List'
import Tab from 'components/Tab'

import fieldDatas from 'data/fields'
import { mapState } from 'vuex'


export default {
    name:'List',
    components:{
        CommonHeader,
        ListScrollWrapper,
        Tab
    },
    computed:{
        ...mapState(['field']),
        title(){
            if(this.field){
                return fieldDatas.filter(item =>item.field === this.field)[0].iconText+'列表';
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>