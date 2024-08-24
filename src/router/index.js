import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/ProductsView.vue')
  },
  {
    path: '/products/:id',
    name: 'singleproduct',
    component: () => import('@/views/SingleProductView.vue'),
    props: true
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/AdminView.vue')
  },
  {
    path: '/useradmin',
    name: 'useradmin',
    component: () => import('@/views/UsersAdminView.vue')
  },
  {
    path: '/productsadmin',
    name: 'productsadmin',
    component: () => import('@/views/ProductsAdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
