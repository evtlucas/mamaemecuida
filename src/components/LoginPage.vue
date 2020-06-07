<template>
  <div id="login">
    <section>
      <form action="#" @submit.prevent="login">
        <label for="email">Usuário</label>
        <input
          type="text"
          id="email"
          v-model.trim="loginForm.email"
          placeholder="you@email.com"
          data-email
        />
        <label for="password" class="default-font">Senha</label>
        <input
          type="password"
          id="password"
          v-model.trim="loginForm.password"
          data-password
        />
        <button>Login</button>
        <div v-if="errorMsg !== ''" id="error-msg" class="error-msg">
          <p>{{ errorMsg }}</p>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { signIn } from '../services/login'

export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        email: '',
        passsword: ''
      },
      errorMsg: ''
    }
  },
  methods: {
    login () {
      signIn(
        this.loginForm.email,
        this.loginForm.password
      )
        .then(user => {
          this.$store.commit('setCurrentUser', user.user)
          this.$router.push('/admin')
        })
        .catch(err => {
          this.errorMsg = err.message
        })
    }
  }
}
</script>

<style scoped>
#login {
  padding: 50px 0px;
  width: 200px;
  height: 200px;
  margin: auto;
}

label {
  margin-top: 10px;
  display: block;
}

button {
  margin-top: 10px;
  border: 0;
  outline: 0;
  min-width: 100px;
  min-height: 30px;
}

#username {
  height: 20px;
}
#password {
  height: 20px;
}
</style>
