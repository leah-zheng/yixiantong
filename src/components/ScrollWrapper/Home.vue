<template>
    <div class="scroll-wrapper" ref="wrapper">
        <div class="scroll-content">
            <category-icons></category-icons>
        </div>
       
    </div>
</template>
<script>
import BetterScroll from 'better-scroll';
import CategoryIcons from './CategoryIcons/Index'
export default {
    name:'HomeScrollWrapper',
    mounted(){
        this.scroll = new BetterScroll(this.$refs.wrapper)
    },
    components:{
        CategoryIcons
    }
}
</script>
<style lang="scss" scoped>
    
</style>