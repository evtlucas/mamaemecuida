<template>
  <div>
    <section id="search">
      <div id="inner-search">
        <Product v-for="product in products" :key="product" :product="product">
        </Product>
      </div>
    </section>
  </div>
</template>

<script>
import Product from './Product'

export default {
  components: {
    Product
  },
  props: ['products']
}
</script>

<style scoped>

#search {
  display: flex;
  flex-flow: column;
  clear: both;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
}

#inner-search {
  width: 80vw;
  margin: auto;
}

@media screen and (max-width: 768px) {
  #inner-search {
    width: 74vw !important;
  }
}

</style>
