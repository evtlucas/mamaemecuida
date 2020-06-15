import VueRouter from 'vue-router'
import MainPage from '@/components/MainPage'
import LoginPage from '@/components/LoginPage'
import AdminPage from '@/components/AdminPage'
import SearchProduct from '@/components/SearchProduct'
import Categories from '@/components/Categories'

const fb = require('./firebaseService')

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/produtos',
    name: 'Products',
    component: SearchProduct
  },
  {
    path: '/categorias/:menu/:submenu',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth.currentUser

  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default { router, routes }
