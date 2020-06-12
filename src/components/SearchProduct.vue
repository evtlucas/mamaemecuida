<template>
  <div>
    <Menu></Menu>
    <section id="search">
      <div id="inner-search">
        <Product v-for="product in products" :key="product" :product="product">
        </Product>
      </div>
    </section>
  </div>
</template>

<script>
import Menu from './Menu'
import Product from './Product'

const fb = require('../firebaseService')

export default {
  data () {
    return {
      products: []
    }
  },
  watch: {
    '$route.query': function () {
      this.loadProducts()
    }
  },
  components: {
    Menu,
    Product
  },
  methods: {
    filterString (unfiltered) {
      return unfiltered.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
    loadProducts () {
      this.products = []
      const query = this.filterString(this.$route.query.query).toLowerCase()
      if (query.length === 0) {
        return
      }
      const queryArray = query.split(' ')
      fb.productsCollection.where('search_title', 'array-contains-any', queryArray).get().then(querySnapshot => {
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

#search {
  clear: both;
  position: relative;
  width: 100%;
  height: 100vh;
}

#inner-search {
  width: 80vw;
  margin: auto;
}

</style>
