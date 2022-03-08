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
          <button class="btn btn-dark" v-if="userInfo.username">{{ userInfo.username }}</button>
          <router-link v-if="!userInfo.username" class="btn btn-outline-dark" to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import AUTHENTICATION_GETTERS from '../store/modules/authentication/authentication-getters'

export default {
    name: "the-navbar",

    computed: {
      ...mapGetters({
        userInfo: AUTHENTICATION_GETTERS.userInfo
      })
    }
}
</script>

<style scoped>
.navbar {
  background-color: #42b983;
}
</style>