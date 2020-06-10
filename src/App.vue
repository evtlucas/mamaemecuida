<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style scoped>

#app {
  margin-left: 5vw;
  margin-right: 5vw;
  background-color: white;
  height: 100vh;
}

@media screen and (max-width: 768px) {
  #app {
    margin: 0;
  }
}

</style>
