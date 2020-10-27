<template>
    <div class="container">
        <common-header :title="title"></common-header>
    </div>
</template>
<script>
import CommonHeader from 'components/Header/Common'
export default {
    name:'City',
    components:{
        CommonHeader
    },
    data(){
        return{
            title:'城市选择'
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>