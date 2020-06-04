<template>
  <div>
    <h1>Admin</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
const fb = require('../firebaseService')

export default {
  methods: {
    logout () {
      fb.auth.signOut().then(() => {
        this.$store.commit('setCurrentUser', null)
        this.$router.push('/')
      })
    }
  }
}
</script>
