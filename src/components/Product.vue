<template>
  <div class="product">
    <div class="picture_container">
      <div class="centralizer">
        <img class="product_picture" :src="product.url_picture"/>
      </div>
    </div>
    <span class="product_title">{{ product.title }}</span>
    <div class="centralizer">
      <a :href="product.url" class="accent1">Detalhes</a>
    </div>
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
  width: 18vw;
  height: 40vh;
  vertical-align: top;
  border-radius: 5px;
  border: 1px solid #afa2b1;
}

.picture_container {
  position: relative;
  float: left;
  width: 100%;
}

.centralizer {
  width: 12vw;
  margin: auto;
}

.product_picture {
  width: 12vw;
}

.product_title {
  display: inline-block;
  font-size: .8em;
  padding: 0vw 1vw 0vw 1vw;
}

a {
  text-align: center;
  display: inline-block;
  text-decoration: none;
  width: 12vw;
  font-size: .8em;
  font-weight: bold;
  margin-top: 1vh;
  padding: 1vw;
  color: white;
}

@media screen and (max-width: 768px) {
  .product {
    height: 25vh;
    width: 35vw;
    margin-left: 1vw;
    margin-right: 1vw;
    margin-top: 1vh;
  }

  .product_picture {
    width: 20vw;
  }

  .product_title {
    font-size: .6em;
    height: 5vh;
  }

  .centralizer {
    width: 18vw;
    margin: auto;
  }

  .product_picture {
    width: 18vw;
  }

  a {
    width: 20vw;
    font-size: .7em;
  }
}
</style>
