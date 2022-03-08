<template>
  <div class="container">
    <div class="login-form">
      <h3 class="mb-3">Welcome</h3>
      
      <div class="mb-3">
        <input class="form-control" placeholder="Email" v-model="userInfo.username">
      </div>

      <div class="mb-3">
        <input type="password" class="form-control" placeholder="Password" v-model="userInfo.password">
      </div>

      <button class="btn btn-success login-btn" v-on:click="submitLogin">Login</button>

      <div class="row">
        <div class="col-6">
          <button class="btn btn-primary fb-btn">Facebook</button>
        </div>

        <div class="col-6">
          <button class="btn btn-danger gg-btn">Google</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AUTHENTICATION_ACTIONS from '@/store/modules/authentication/authentication-actions'
import { mapActions } from 'vuex'

export default{
  name: 'LoginForm',

  data() {
    return {
      userInfo: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    ...mapActions({login: AUTHENTICATION_ACTIONS.login}),

    submitLogin() {
      console.log(this.userInfo)
      this.login(this.userInfo)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.login-form {
  max-width: 400px; 
  max-height: 400px;
  margin: 150px auto;
  border: 1px solid gray;
  padding: 20px 20px;
  border-radius: 7px;
}

.login-btn {
 width: 100%;
 margin-bottom: 10px;
}

.fb-btn {
  width: 100%;
}

.gg-btn {
  width: 100%;
}
</style>