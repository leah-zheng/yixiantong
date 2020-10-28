<template>
    <div class="container">
        <common-header :title='title'></common-header>
    </div>
</template>
<script>
import CommonHeader from 'components/Header/Common'
export default {
    name:'List',
    components:{
        CommonHeader
    },
    data(){
        return{
            title:'列表'
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>