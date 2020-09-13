import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import Recover from '@/components/auth/Recover'
import firebase from 'firebase'

Vue.use(Router)
  


const router =  new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta:{
        requiresAuth:true
      }
    },
    {
      path:"/signup",
      name: "Signup",
      component: Signup
    },
    {
      path:"/login",
      name: "Login",
      component: Login
    },
    {
      path:"/recover",
      name: "Recover",
      component: Recover
    },
    
   
  ]
})
router.beforeEach((to, from, next) => {
  // check to see if route has auth guard
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    // check auth state of user
    let user = firebase.auth().currentUser
    if (user) {
      // User is signed in. Proceed to route
      next()
    } else {
      // No user is signed in. Redirect to login
      next({
        name: "Login"
      })
    }
  } else {
    // if route is not guarded by auth, proceed
    next()
  }
})

export default router
