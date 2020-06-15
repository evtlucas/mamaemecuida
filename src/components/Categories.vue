<template>
  <div>
    <Menu></Menu>
    <ProductShowCase :products="products"></ProductShowCase>
  </div>
</template>

<script>
import Menu from './Menu'
import ProductShowCase from './ProductShowCase'

const categories = require('../data/categories')
const fb = require('../firebaseService')

export default {
  name: 'categories',
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
    '$route.params': function () {
      this.loadProductsFromCategory()
    }
  },
  methods: {
    loadProductsFromCategory () {
      this.products = []
      const menu = this.$route.params.menu
      const submenu = this.$route.params.submenu
      const category = categories.categories.filter(item => {
        if (item.menu === menu && item.submenu === submenu) {
          return item
        }
      })
      const categoryName = [category[0].code]
      fb.productsCollection.where('category', 'array-contains-any', categoryName).get().then(snap => {
        snap.forEach(snapshot => {
          const product = snapshot.data()
          this.products.push(product)
        })
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.loadProductsFromCategory()
  }
}
</script>
