<template>
    <header class="header">
        <city-selector></city-selector>
        <false-input></false-input>
    </header>
</template>
<script>
import CitySelector from './Sub/CitySelector'
import FalseInput from './Sub/FalseInput'
export default {
    name:'HomeHeader',
    components:{
        CitySelector,
        FalseInput
    }
}
</script>
<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variables.scss';
    .header{
        @include flex-row;
        height: $headerHeight;
        background-color: $defaultBgColor;
    }
</style>