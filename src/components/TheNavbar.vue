<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/crud">CRUD</router-link>
          </li>
        </ul>
        
        <div class="d-flex">
          <button class="btn btn-dark" v-if="userInfo.email">{{ userInfo.name }}</button>

          <button class="btn btn-outline-dark ml-3" v-if="userInfo.email" v-on:click="logout">Log out</button>
 
          <router-link v-if="!userInfo.email"  class="btn btn-outline-dark" to="/login">Login</router-link>

          <router-link v-if="!userInfo.email" class="btn btn-dark" to="/register">Register</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import AUTHENTICATION_GETTERS from '../store/modules/authentication/authentication-getters'
import AUTHENTICATION_ACTIONS from '@/store/modules/authentication/authentication-actions'
import { mapActions } from 'vuex'
import Cookies from 'js-cookie'
import axios from 'axios'
import { AUTH_API } from '@/factories/auth'

export default {
  name: "the-navbar",

  computed: {
    ...mapGetters({
      userInfo: AUTHENTICATION_GETTERS.userInfo
    })
  },

  methods: {
    ...mapActions({login: AUTHENTICATION_ACTIONS.login}),

    async logout() {
      const access_token = Cookies.get('access_token')

      if(access_token) {
        const headers = {
          Authorization: `Bearer ${access_token}`
        }

        await axios.post(AUTH_API.logoutApi, {}, {
          headers: headers
        })
        .then(res => {
          if(res) {
            if(res.status === 200) {
              this.login({})

              this.$router.push('/login')
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
        
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #42b983;
}
</style>