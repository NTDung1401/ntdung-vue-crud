import Vue from "vue";
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'
import LoginForm from '../components/LoginForm.vue'
import RegisterForm from "../components/RegisterForm"

Vue.use(VueRouter)

const routes = [
  {path: "/", component: HelloWorld},
  {path: "/login", component: LoginForm},
  {path: "/register", component: RegisterForm}
]

export const router =  new VueRouter({
  routes,
  mode: 'history'
})