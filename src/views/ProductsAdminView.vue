<template>
  <div id="products">
    <h1>Products Table</h1>
    <div class="admin-container">
      <!-- <button id="adminSortProduct" class="btn btn-secondary">Sort</button> -->
      <button id="adminAddProductBtn" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#adminAddProduct">Add Product</button>
    </div>

    <div class="modal fade" id="adminAddProduct" tabindex="-1" aria-labelledby="adminAddProductLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="adminAddProductLabel">Add Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="addProductForm">
              <div class="mb-3">
                <label for="productName" class="form-label">Product Name</label>
                <input type="text" class="form-control" id="productName" name="productName" v-model="prod_name">
              </div>
              <div class="mb-3">
                <label for="productAmount" class="form-label">Amount</label>
                <input type="text" class="form-control" id="productAmount" name="productAmount" v-model="amount">
                <label for="productQuantity" class="form-label">Quantity</label>
                <input type="number" class="form-control" id="productQuantity" name="productQuantity" v-model="quantity">
              </div>
              <div class="mb-3">
                <label for="productCategory" class="form-label">Category</label>
                <input type="text" class="form-control" id="productCategory" name="productCategory" v-model="category">
              </div>
              <div class="mb-3">
                <label for="productImage" class="form-label">Drag Image here</label>
                <input type="image" class="form-control" id="productImage" name="productImage" v-model="prod_url">
              </div>
              <div class="mb-3">
                <label for="productDescription" class="form-label">Description</label>
                <input type="text" class="form-control" id="productDescription" name="productDescription" v-model="prod_description">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addProduct()">Save Product</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Table -->
    <table id="productTable" class="table table-striped">
      <thead>
        <tr>
          <th>Product</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody id="table-products">
        <tr v-for="product in $store.state.products" :key="product.prod_id">
          <td><img :src="product.prod_url" alt="" width="30%"></td>
          <td>{{ product.prod_name }}</td>
          <td>{{ product.quantity }}</td>
          <td>R{{ product.amount }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.prod_description }}</td>
          <td>
            <button class="btn"><i class="fa-solid fa-trash"></i></button>  
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      prod_name:'',
      quantity:'',
      amount:'',
      category:'',
      prod_description:'',
      prod_url:''

    }
  },
  methods: {
    fetchProducts(){
      this.$store.dispatch('fetchProducts')
    },
    addProduct(){
      this.$store.dispatch('addProduct',this.$data)
    },
    deleteUser(prod_id){
      this.$store.dispatch('deleteProduct',prod_id)
      console.log('delete successful');
      // location.reload()
      
    }
  },
  mounted() {
    this.fetchProducts()
  },
 
}
</script>