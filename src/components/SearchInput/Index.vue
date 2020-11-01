<template>
    <div class="search-input">
        <div class="input-wrapper">
            <span class="iconfont icon-header-search"></span>
            <input type="text" class="input" :placeholder="placeholder" v-model="keyword" @input="searchKeyword"/>
        </div>
    </div>
</template>
<script>
import {SearchModel} from 'models/search';
import { mapState } from 'vuex';
import tools from 'utils/tools';
export default {
    name:'SearchInput',
    data(){
        return {
            placeholder:'景点 / 美食 / 酒店 / 按摩 / KTV',
            keyword:''
        }
    },
    computed:{
      ...mapState(['cityId'])  
    },
    methods:{
        searchKeyword:tools.throttle(function(){
            const keyword = tools.trimSpace(this.keyword);
            if(keyword.length <= 0){
                this.$emit('onSearch',{});
                return;
            }
            const searchModel = new SearchModel();
            searchModel.searchAction(keyword,this.cityId).then(res =>{
                this.$emit('onSearch',res);
            })
        },1000)
    }
}
</script>
<style lang="scss" scoped>
    .search-input {
		height: .44rem;
		padding: .06rem .15rem;
		background-color: #fff;
		box-sizing: border-box;

    .input-wrapper {
    	position: relative;
    	width: 100%;
    	height: 100%;

    	.iconfont {
    		position: absolute;
    		top: .08rem;
    		left: .08rem;
    		font-size: .16rem;
    	}

    	.input {
    		width: 100%;
    		height: 100%;
    		border: 1px solid #ddd;
    		border-radius: .03rem;
    		box-sizing: border-box;
    		font-size: .14rem;
    		text-indent: .32rem;
    	}
    }
	}
</style>