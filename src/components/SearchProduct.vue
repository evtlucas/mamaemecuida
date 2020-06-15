<template>
  <div>
    <Menu></Menu>
    <ProductShowCase :products="products"></ProductShowCase>
  </div>
</template>

<script>
import Menu from './Menu'
import ProductShowCase from './ProductShowCase'

const fb = require('../firebaseService')

export default {
  components: {
    Menu,
    ProductShowCase
  },
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
