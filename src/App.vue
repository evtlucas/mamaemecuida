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
  margin-left: 100px;
  margin-right: 100px;
  background-color: white;
  height: 100vh;
}

#title-box {
  margin: 10px;
  width: 100%;
  float: left;
}

#title {
  font-family: 'Butterfly Kids', arial, sans-serif;
  font-size: 50px;
  text-align: left;
  float: left;
  margin: 0;
}

</style>
