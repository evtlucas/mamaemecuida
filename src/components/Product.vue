<template>
  <div class="product">
    <div class="picture_container">
      <div class="centralizer">
        <img height="130vh" :src="product.url_picture"/>
      </div>
    </div>
    <a :href="product.url" class="details-link accent1">Detalhes</a>
    <span class="product_title">{{ product.title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>

<style scoped>
.product {
  display: inline-block;
  margin-left: 1vw;
  margin-right: 1vw;
  margin-top: 2vh;
  width: 18vw;
  height: 42vh;
  vertical-align: top;
  border-radius: 5px;
  border: 1px solid #afa2b1;
  text-align: center;
}

.picture_container {
  position: relative;
  float: left;
  width: 100%;
  margin-top: 1vh;
}

.centralizer {
  text-align: center;
  margin: auto;
}

.product_title {
  display: inline-block;
  width: 18vw;
  font-size: .8em;
  padding: 0vw 1vw 0vw 1vw;
}

.details-link {
  text-align: center;
  display: inline-block;
  text-decoration: none;
  width: 8vw;
  font-size: .8em;
  font-weight: bold;
  margin-top: 2vh;
  margin-bottom: 2vh;
  padding: 1vw;
  color: white;
}

@media screen and (max-width: 768px) {
  img {
    height: 10vh !important;
  }
  .product {
    height: 25vh;
    width: 35vw;
    margin-left: 1vw;
    margin-right: 1vw;
    margin-top: 1vh;
    text-align: center;
  }

  .product_picture {
    width: 20vw;
  }

  .product_title {
    font-size: .6em;
    height: 5vh;
    width: 35vw !important;
  }

  .centralizer {
    width: 18vw;
    margin: auto;
  }

  .product_picture {
    width: 18vw;
  }

  .details-link {
    width: 20vw;
    font-size: .7em;
    margin-left: 0vw;
    margin-top: 1vh !important;
  }
}
</style>
