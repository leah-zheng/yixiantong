<template>
    <div class="container">
        <common-header :title="title"></common-header>
        <search-input @onSearch="onSearch"></search-input>
        <search-scroll-wrapper :data="data"></search-scroll-wrapper>
    </div>
</template>
<script>
import SearchInput from 'components/SearchInput/Index'
import CommonHeader from 'components/Header/Common'
import SearchScrollWrapper from 'components/ScrollWrapper/Search'
import tools from 'utils/tools'
export default {
    name:'Search',
    components:{
        CommonHeader,
        SearchInput,
        SearchScrollWrapper
    },
    data(){
        return{
            title:'商家搜索',
            data:{}
        }
    },
    methods:{
        onSearch(res){
            
            if(res && res.status === 0){
                const datas = res.data;
                
                datas.foodDatas = tools.formatJSON(datas.foodDatas,'keyword');
                this.data = datas;
                
            }else{
                this.data = res
            }
            
            
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>