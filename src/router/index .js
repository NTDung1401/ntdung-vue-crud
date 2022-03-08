import Vue from "vue";
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'
import LoginForm from '../components/LoginForm.vue'

Vue.use(VueRouter)

const routes = [
  {path: "/", component: HelloWorld},
  {path: "/login", component: LoginForm}
]

export const router =  new VueRouter({
  routes,
  mode: 'history'
})