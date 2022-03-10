<template>
  <div id="app">
    <TheNavbar />
    
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import { AUTH_API } from "./factories/auth"
import Cookies from 'js-cookie'
import axios from 'axios'
import { mapActions } from 'vuex'
import AUTHENTICATION_ACTIONS from '@/store/modules/authentication/authentication-actions'

export default {
  name: 'App',
  components: {
    TheNavbar
  },

  methods: {
    ...mapActions({login: AUTHENTICATION_ACTIONS.login}),
  },

  async beforeMount() {
    const access_token = Cookies.get('access_token')

    if(access_token) {
      const headers = {
        Authorization: `Bearer ${access_token}`
      }

      await axios.get(AUTH_API.getUserProfileApi, {
        headers: headers
      })
      .then(res => {
        if(res) {
          this.login(res.data)
        }
      })
      .catch(err => {
        if(err.response.status === 401) {
          this.$router.push("/login")
        }
      })
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
