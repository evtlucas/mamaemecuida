<template>
  <div id="showcase">
    <div id="inner-showcase">
      <Product v-for="product in products" :key="product" :product="product">
      </Product>
    </div>
  </div>
</template>

<script>
import Product from './Product'

const fb = require('../firebaseService')

export default {
  components: {
    Product
  },
  data () {
    return {
      products: []
    }
  },
  methods: {
    async loadProducts () {
      await fb.productsCollection.limit(4).get().then(querySnapshot => {
        querySnapshot.forEach(snapshot => {
          const product = snapshot.data()
          this.products.push(product)
        })
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.loadProducts()
  }
}
</script>

<style scoped>
#showcase {
  height: 65vh;
  width: 100%;
  margin-top: 3vh;
  float: left;
}

#inner-showcase {
  margin-top: 3vh;
  width: 100%;
  height: 100%;
  margin: auto;
  text-align: center;
}

@media screen and (max-width: 768px) {
  #showcase {
    height: 50vh;
  }

  #inner-showcase {
    height: 50vh;
  }
}

@media screen and (max-width: 768px) and (orientation: landscape) {
  #showcase {
    background-color: white;
    height: 90vh;
  }
}
</style>
