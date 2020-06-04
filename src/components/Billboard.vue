<template>
  <div id="billboard">
    <div id="img-shadow">
      <img src="@/assets/images/care.jpg" alt="Care" width="960" height="540">
    </div>
    <div id="p-box">
      <p class="default-font">Cuidados para a mamãe, bebê e o planeta!</p>
    </div>
  </div>
</template>

<script>
/*
* Photo by The Honest Company on Unsplash
*/
export default {
  name: 'billboard'
}
</script>

<style scoped>
#billboard {
  margin: auto;
  width: 960px;
  clear: both;
  background-color: white;
}

#img-shadow {
  display: inline-block;
  float: left;
  width: 600px;
  height: 400px;
  margin: 0;
}

#p-box {
  display: inline-block;
  float: right;
  width: 180px;
  height: 520px;
  margin: 10px;
  padding-top: 100px;
  box-sizing: border-box;
  background-color: rgba(244,179,176,.5);
}

#p-box > p {
  font-family: 'Butterfly Kids', arial, sans-serif;
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  color: #323030;
}

</style>
