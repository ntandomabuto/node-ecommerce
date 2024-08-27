import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const api = 'https://node-ecommerce-iqje.onrender.com/';

export default createStore({
  state: {
    users: [], 
    user: null, 
    products: [], 
  },
  mutations: {
    addUserToState(state, user) {
      state.users.push(user);
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    }
  },
  actions: {
    async addUser({ commit }, user_id) {
      try {
        const { data } = await axios.post(`${api}user/insert`, { id: user_id });
        console.log(data);
        commit('addUserToState', data);
      } catch (err) {
        console.error(err);
        toast.error('Failed to add user', {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    },
    async fetchUser({ commit }, id) {
      try {
        const { data } = await axios.get(`${api}user/${id}`);
        commit('setUser', data);
      } catch (err) {
        console.error(err);
        toast.error('Failed to fetch user', {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    },
    async register({ dispatch }, payload) {
      try {
        const { data } = await axios.post(`${api}user/insert`, payload);
        const { msg, err, token } = data;
        if (token) {
          dispatch('fetchUsers');
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
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
    },
    async updateUser({ dispatch }, payload) {
      try {
        const { data } = await axios.patch(`${api}user/${payload.userID}`, payload);
        const { msg, err } = data;
        if (msg) {
          dispatch('fetchUsers');
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
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
    },
    async deleteUser({ dispatch }, id) {
      try {
        const { data } = await axios.delete(`${api}user/${id}`);
        const { msg, err } = data;
        if (msg) {
          dispatch('fetchUsers');
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
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
    },
    async fetchProducts({ commit }) {
      try {
        const { data } = await axios.get(`${api}product`);
        console.log(data);
        if (data) {
          commit('setProducts', data);
        } else {
          toast.error('No products found', {
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
    },
    async addProduct({ dispatch }, payload) {
      try {
        const { data } = await axios.post(`${api}product/add`, payload);
        const { msg } = data;
        if (msg) {
          dispatch('fetchProducts');
          toast.success(`${msg}`, {
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
    },
    async updateProduct({ dispatch }, payload) {
      try {
        const { data } = await axios.patch(`${api}product/${payload.productID}`, payload);
        const { msg } = data;
        if (msg) {
          dispatch('fetchProducts');
          toast.success(`${msg}`, {
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
    },
    async deleteProduct({ dispatch }, id) {
      try {
        const { data } = await axios.delete(`${api}product/${id}`);
        const { msg } = data;
        if (msg) {
          dispatch('fetchProducts');
          toast.success(`${msg}`, {
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
  },
  modules: {
  }
});
