<template>
    <div id="products">
      <h1>Products Table</h1>
      <div class="admin-container">
        <button id="adminSortProduct" class="btn btn-secondary">Sort</button>
        <button id="adminAddProductBtn" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#adminAddProduct">Add Product</button>
      </div>
      <div class="modal fade" id="adminAddProduct" tabindex="-1" aria-labelledby="adminAddProductLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="adminAddProductLabel">ID</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="addProductForm">
                <div class="mb-3">
                  <label for="productName" class="form-label">Product Name</label>
                  <input type="text" class="form-control" id="productName" name="productName" required>
                </div>
                <div class="mb-3">
                  <label for="productAmount" class="form-label">Amount</label>
                  <input type="text" class="form-control" id="productAmount" name="productAmount" required>
                </div>
                <div class="mb-3">
                  <label for="productAge" class="form-label">Age</label>
                  <input type="number" class="form-control" id="productAge" name="productAge" required>
                </div>
                <div class="mb-3">
                  <label for="productGender" class="form-label">Gender</label>
                  <input type="text" class="form-control" id="productGender" name="productGender" required>
                </div>
                <div class="mb-3">
                  <label for="productEmail" class="form-label">Email Address</label>
                  <input type="email" class="form-control" id="productEmail" name="productEmail" required>
                </div>
                <div class="mb-3">
                  <label for="productPassword" class="form-label">Password</label>
                  <input type="password" class="form-control" id="productPassword" name="productPassword" required>
                </div>
                <div class="mb-3">
                  <label for="productProfile" class="form-label">Profile</label>
                  <input type="file" class="form-control" id="productProfile" name="productProfile">
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" id="saveProduct">Save Product</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product Table -->
      <table id="productTable" class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Image</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody id="table-products">
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      saveProduct() {
        console.log('Saving product...');
        const form = document.getElementById('addProductForm');
        const formData = new FormData(form);
  
        const payload = {
            prod_id: formData.get('productID'),
            prod_name: formData.get('productName'),
            quantity: formData.get('productQuantity'),
            amount: formData.get('productAmount'),
            category: formData.get('productCategory'),
            prod_url: formData.get('productUrl'),
            prod_description: formData.get('productDescription')
        };
        console.log(payload);
      }
    },
    mounted() {
      const saveButton = document.getElementById('saveProduct');
      if (saveButton) {
        saveButton.addEventListener('click', this.saveProduct);
      }
    },
    beforeUnmount() {
      const saveButton = document.getElementById('saveProduct');
      if (saveButton) {
        saveButton.removeEventListener('click', this.saveProduct);
      }
    }
  }
  </script>
  
  <style scoped>
  .btn {
    margin: .4rem;
  }
  </style>
  