<template>
  <div id="billboard">
    <div id="inner-bilboard">
      <div id="img-shadow" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      </div>
      <div id="p-box">
        <p class="default-font">Cuidados para a mamãe, bebê e o planeta!</p>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundUrl from '@/assets/images/care.jpg'

export default {
  name: 'billboard',
  data () {
    return {
      backgroundUrl
    }
  }
}
</script>

<style scoped>
#billboard {
  float: left;
  width: 100%;
  clear: both;
  background-color: white;
  padding: 0;
}

#inner-bilboard {
  position: relative;
  width: 80vw;
  margin: auto;
}

#img-shadow {
  display: inline-block;
  width: 80vw;
  height: 90vh;
  background-size: 80vw 90vh;
  margin: 0;
}

#p-box {
  position: absolute;
  top: 0px;
  right: 5px;
  height: 86vh;
  width: 15vw;
  margin-top: 2vh;
  margin-right: 1vw;
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
    width: 100vw;
  }

  #img-shadow {
    float: left;
    width: 80vw;
    height: 30vh;
    background-size: 80vw 30vh;
    background-repeat: no-repeat;
  }

  #p-box {
    display: inline-block;
    height: 26vh;
    width: 20vw;
    padding: 0px;
  }

  #p-box > p {
    font-size: 1.3em;
    padding: 0;
    margin: 0px;
  }
}

@media screen and (max-width: 768px) and (orientation: landscape) {
  #img-shadow {
    height: 80vh !important;
    background-size: 80vw 80vh !important;
  }

  #p-box {
    position: absolute;
    top: 0px;
    right: 5px;
    height: 76vh;
    width: 15vw;
    margin-top: 2vh;
    margin-right: 1vw;
    padding-top: 100px;
    box-sizing: border-box;
    background-color: rgba(244,179,176,.5);
  }
}

</style>
