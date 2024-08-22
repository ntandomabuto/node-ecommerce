<template>
    <div class="container">
      <h3>Admin</h3>
        <button @click="fetchUsers">Get Users</button>
         <section v-for="user in $store.state.user" :key="user.user_id">
          {{ user.user_id }}
          {{ user.firstname }}
          {{ user.lastname }}
         </section>
         <section v-for="user in $store.state.product" :key="user.product_id">
          {{ user.product_id }}
          {{ user.firstname }}
          {{ user.lastname }}
         </section>
    </div>
  </template>
  <script>
  export default{
    methods:{
          fetchUsers(){
              this.$store.dispatch('fetchUsers')
          },
          fetchUser(){
              this.$store.dispatch('fetchUser')
          },
          register(){
              this.$store.dispatch('register')
          },
          updateUser(){
              this.$store.dispatch('updateUser')
          },
          deleteUser(){
              this.$store.dispatch('deleteUser')
          },
          fetchProducts(){
              this.$store.dispatch('fetchProducts')
          },
          fetchProduct(){
              this.$store.dispatch('fetchProduct')
          },
          addAProduct(){
              this.$store.dispatch('addAProduct')
          },
          updateProduct(){
              this.$store.dispatch('updateProduct')
          },
          deleteProduct(){
              this.$store.dispatch('deleteProduct')
          },
      },
      mounted(){
        this.fetchUsers()
        this.fetchUser()
        this.register()
        this.deleteUser()
        this.fetchProducts()
        this.fetchProduct()
        this.addAProduct()
        this.updateProduct()
        this.deleteProduct()
      }
  }
  </script>
  