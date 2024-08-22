import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import router from '@/router'

const api = 'https://node-ecommerce-iqje.onrender.com/'

axios.defaults.withCredentials = true

export default createStore({
  state: {
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
async register({ dispatch }, payload) {
    try {
      const { data } = await axios.post(`${api}user/register`, payload);
      const { msg, err, token } = data;
      if (token) {
        dispatch('fetchUsers');
        toast.success(`${msg}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
        router.push({ name: 'login' });
      } else {
        toast.error(`${err}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
  }
  ,
    async updateUser({ dispatch }, payload) {
      try {
        const { data } = await axios.patch(`${api}user/${payload.userID}`, payload)
        const { msg, err } = data
        if (msg) {
          dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async deleteUser({ dispatch }, id) {
      try {
        const { data } = await axios.delete(`${api}user/${id}`)
        const { msg, err } = data
        if (msg) {
          dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchProducts({ commit }) {
      try {
        const { data } = await axios.get(`${api}product`)
        if (data) {
          commit('setProducts', data)
        } else {
          router.push({ name: 'login' })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async recentProducts({ commit }) {
      try {
        const { data } = await axios.get(`${api}product/recent`)
        const { results, msg } = data
        if (results) {
          commit('setRecentProducts', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchProduct({ commit }, id) {
      try {
        const { data } = await axios.get(`${api}product/${id}`)
        const { result, msg } = data
        if (result) {
          commit('setProduct', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async addAProduct({ dispatch }, payload) {
      try {
        const { data } = await axios.post(`${api}product/add`, payload)
        const { msg } = data
        if (msg) {
          dispatch('fetchProducts')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async updateProduct({ dispatch }, payload) {
      try {
        const { data } = await axios.patch(`${api}product/${payload.productID}`, payload)
        const { msg } = data
        if (msg) {
          dispatch('fetchProducts')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async deleteProduct({ dispatch }, id) {
      try {
        const { data } = await axios.delete(`${api}product/${id}`)
        const { msg } = data
        if (msg) {
          dispatch('fetchProducts')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    }
  },
  modules: {
  }
})