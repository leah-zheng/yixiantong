<template>
  <div id="app">
    <keep-alive include="Index,Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body,#app,.container{
    height: 100%;
  }
</style>
