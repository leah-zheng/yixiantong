<template>
  <div class="wrapper">
    <div class="header">
       <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '一线城市通'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '~styles/variables.scss';
@import '~styles/mixin.scss';

.wrapper{
  text-align: center;
  .header{
    @include vh-center;
    height: $headerHeight;
    background-color: $defaultBgColor;
    
    h1{
      font-size: .18rem;
    }
  }
}
</style>
