<template>
  <div class="container">
    <div class="login-form">
      <h3 class="mb-3">Welcome</h3>
      
      <div class="mb-3">
        <input class="form-control" placeholder="Email" v-model="userInfo.email">
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
import axios from 'axios'
import { AUTH_API } from '@/factories/auth'
import Cookies from 'js-cookie'

export default{
  name: 'LoginForm',

  data() {
    return {
      userInfo: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    ...mapActions({login: AUTHENTICATION_ACTIONS.login}),

    async submitLogin() {
      const loginFormData = new FormData()
      loginFormData.append("email", this.userInfo.email)
      loginFormData.append("password", this.userInfo.password)

      await axios.post(AUTH_API.loginApi, loginFormData)
      .then(res => {
        if(res) {
          console.log(res.data)
          if(res.data) {
            Cookies.set('access_token', res.data.access_token)
            this.login(res.data.user)

            this.$router.push('/')
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
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