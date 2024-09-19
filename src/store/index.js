import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
/* eslint-disable*/
import 'vue3-toastify/dist/index.css'
import router from '@/router'

const api = 'https://node-ecommerce-iqje.onrender.com/'
export default createStore({
  state: {
    // users: null,
    user: null,
    products: null,
    recentProducts: null,
    product: null
  },
  mutations: {
    setUsers(state, value) {
      state.user = value
    },
    setUser(state, value) {
      state.user = value
    },
    updateProduct(state,product){
      state.product=state.product.map(o => o.prod_id === product.prod_id? product:o)
    },
    deleteUser(state,payload){
      state.user = state.user.filter(user => user.id !== payload);
    },
    deleteProduct(state, payload) {
      state.product = state.product.filter(product => product.id !== payload);
    },
    setProducts(state, value) {
      state.products = value
    },
    setRecentProducts(state, value) {
      state.recentProducts = value
    },
    setProduct(state, value) {
      state.product = value
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const { data } = await axios.get(`${api}user`)
        commit('setUsers', data)
      } catch (err) {
        console.error(err)
        toast.error('Failed to fetch users', {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async deleteUser({ commit },user_id) {
      try {
        let { data } = await axios.delete(`${api}user/${user_id}`)
        console.log( data)
      } catch (err) {
        console.error(err)
        toast.error('Failed to delete user', {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async deleteProduct({ commit },prod_id) {
      try {
        let { data } = await axios.delete(`${api}product/${prod_id}`)
        console.log( data)
      } catch (err) {
        console.error(err)
        toast.error('Failed to delete product', {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    
    async addUser({commit},info){
      let {data}= await axios.post(`https://node-ecommerce-iqje.onrender.com/user/insert`,info)
      console.log(data);
    },
    async fetchUser({ commit }, id) {
      try {
        const { data } = await axios.get(`${api}user/${id}`)
        commit('setUser', data)
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async addProduct({commit}, info) {
      let {data} = await axios.post('https://node-ecommerce-iqje.onrender.com/product/insert',info)
  },
    async fetchProducts({ commit }) {
      try {
        let {data} =await axios.get(`${api}product`)
        commit('setProducts',data)
        console.log(data);
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchProduct({ commit }, prod_id) {
      try {
        let { data } = await axios.get(`${api}product/${prod_id}`)
      
          commit('setProduct', data)
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async updateProduct({ commit }, prod_id) {
      let {data} = await axios.patch(`https://node-ecommerce-iqje.onrender.com/product/${prod_id}`)
          .then(response => {
              commit('updateProduct', response.data)
          })
          .catch(error => {
              console.error(error)
          })
        },
    
    
  },
  modules: {
  }
})
