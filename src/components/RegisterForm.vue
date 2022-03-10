<template>
  <div class="container">
    <div class="login-form">
      <h3 class="mb-3">Register</h3>

      <div class="mb-3">
        <input class="form-control" placeholder="Name" v-model="userInfo.name">
      </div>
      
      <div class="mb-3">
        <input class="form-control" placeholder="Email" v-model="userInfo.email">
      </div>

      <div class="mb-3">
        <input type="password" class="form-control" placeholder="Password" v-model="userInfo.password">
      </div>

      <div class="mb-3">
        <input type="password" class="form-control" placeholder="Confirm Password" v-model="userInfo.password_confirmation">
      </div>

      <button class="btn btn-success login-btn" v-on:click="submitRegister">Register</button>

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
import axios from 'axios'
import { AUTH_API } from '@/factories/auth'

export default{
  name: 'RegisterForm',

  data() {
    return {
      userInfo: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },

  methods: {

    async submitRegister() {
      const registerFormData = new FormData()
      registerFormData.append("name", this.userInfo.name)
      registerFormData.append("email", this.userInfo.email)
      registerFormData.append("password", this.userInfo.password)
      registerFormData.append("password_confirmation", this.userInfo.password_confirmation)

      await axios.post(AUTH_API.registerApi, registerFormData)
      .then(res => {
        if(res) {
          if(res.data) {
            // this.login(res.data.user)
            console.log(res.data)
          }
        }

        this.$router.push('/login')
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