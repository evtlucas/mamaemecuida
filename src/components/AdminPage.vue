<template>
  <div>
    <h1>Admin</h1>
    <button @click='logout'>Logout</button>
    <button @click='createCategories'>Create categories</button>
    <button @click='createProducts'>Create products</button>
    <p v-if="msg.length > 0">{{ msg }}</p>
  </div>
</template>

<script>
const categoriesData = require('../data/categories')
const productsData = require('../data/products')
const fb = require('../firebaseService')

export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    logout () {
      fb.auth.signOut().then(() => {
        this.$store.commit('setCurrentUser', null)
        this.$router.push('/')
      })
    },
    createCategories () {
      const categories = categoriesData.categories
      for (var prop in categories) {
        fb.categoriesCollection.doc(prop).set(categories[prop]).then(() => {
          this.msg = 'Created categories'
        }).catch(err => {
          this.msg = err.message
        })
      }
    },
    createProducts () {
      const products = productsData.products
      for (var prop in products) {
        fb.productsCollection.doc(prop).set(products[prop]).then(() => {
          this.msg = 'Created products'
        }).catch(err => {
          this.msg = err.message
        })
      }
    }
  }
}
</script>
