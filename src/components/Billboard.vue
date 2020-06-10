<template>
  <div id="billboard">
    <div id="img-shadow">
      <img src="@/assets/images/care.jpg" alt="Care">
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
  position: relative;
  margin: auto;
  width: 960px;
  clear: both;
  background-color: white;
}

img {
  width: 160%;
  height: auto;
}

#img-shadow {
  display: inline-block;
  width: 600px;
  height: 400px;
  margin: 0;
}

#p-box {
  position: absolute;
  top: 0px;
  right: 5px;
  height: 520px;
  width: 200px;
  margin: 10px;
  padding-top: 100px;
  box-sizing: border-box;
  background-color: rgba(244,179,176,.5);
}

#p-box > p {
  font-family: 'Butterfly Kids', arial, sans-serif;
  padding: 5px;
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  color: #323030;
}

@media screen and (max-width: 768px) {
  #billboard {
    width: 80vw;
    height: 40vh;
  }

  #img-shadow {
    float: left;
    width: 80vw;
    height: 30vh;
  }

  img {
    width: 80vw;
    height: auto;
  }

  #p-box {
    display: inline-block;
    height: 20vh;
    width: 20vw;
    padding: 0px;
  }

  #p-box > p {
    font-size: 1.3em;
    padding: 0;
    margin: 0px;
  }
}

</style>
