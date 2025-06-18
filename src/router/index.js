import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProduct from '../views/Admin/AddProduct.vue'
import ProductDetail from '../views/ProductDetail.vue'
import AdminProducts from '../views/Admin/AdminProducts.vue'
import DeleteProduct from '../views/Admin/DeleteProduct.vue'
import AdminEditSelect from '../views/Admin/AdminEditSelect.vue'
import EditProduct from '../views/Admin/EditProduct.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // add product
  {
    path: '/admin/product/add',
    name: '/AddProduct',
    component: AddProduct
  },
  //  show details of product
  {
    path: '/product/details/:id',
    name: 'ProductDetail',
    component: ProductDetail
  },
  //admin product panel
  {
    path: '/admin',
    name: 'AdminProducts',
    component: AdminProducts
  },
  //admin delete page
  {
    path: '/admin/product/delete',
    name: 'DeleteProduct',
    component: DeleteProduct
  },
  //admin edit product select page
  {
    path: '/admin/product/edit',
    name: 'AdminEditSelect',
    component: AdminEditSelect
  },
  //admin edit page
  {
    path: '/admin/product/edit/:id',
    name: 'EditProduct',
    component: EditProduct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
