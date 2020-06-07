<template>
  <div>
    <h1>Admin</h1>
    <button @click='logout'>Logout</button>
    <button @click='createCategories'>Create categories</button>
    <p v-if="msg.length > 0">{{ msg }}</p>
  </div>
</template>

<script>
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
      const categories = {
        m_shampoo: {
          category: 'Shampoo',
          menu: 'mamae'
        },
        m_sabonete: {
          category: 'Sabonete',
          menu: 'mamae'
        },
        m_creme: {
          category: 'Creme',
          menu: 'mamae'
        }
      }
      for (var prop in categories) {
        fb.categoriesCollection.doc(prop).set(categories[prop]).then(() => {
          this.msg = 'Category created'
        }).catch(err => {
          this.msg = err.message
        })
      }
    }
  }
}
</script>
