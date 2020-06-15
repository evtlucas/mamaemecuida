<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  title: 'Mamãe Me Cuida',
  components: {}
}
</script>

<style scoped>

#app {
  margin-left: 5vw;
  margin-right: 5vw;
  background-color: white;
  height: 170vh;
}

@media screen and (max-width: 768px) {
  #app {
    margin: 0;
    height: 110vh;
  }
}

@media screen and (max-width: 768px) and (orientation: landscape) {
  #app {
    height: 170vh;
  }
}

</style>
