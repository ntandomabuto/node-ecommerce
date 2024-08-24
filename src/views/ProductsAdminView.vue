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
                  <label for="productQuantity" class="form-label">Quantity</label>
                  <input type="number" class="form-control" id="productQuantity" name="productQuantity" required>
                </div>
                <div class="mb-3">
                  <label for="productAmount" class="form-label">Amount</label>
                  <input type="text" class="form-control" id="productAmount" name="productAmount" required>
                </div>
                
                <div class="mb-3">
                  <label for="productCategory" class="form-label">Category</label>
                  <input type="text" class="form-control" id="productCategory" name="productCategory" required>
                </div>
                <div class="mb-3">
                  <label for="productImage" class="form-label">Description</label>
                  <input type="text" class="form-control" id="productImage" name="productImage" required>
                </div>
                
                <div class="mb-3">
                  <label for="productDescription" class="form-label">Image</label>
                  <input type="file" class="form-control" id="productDescription" name="productDescription">
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
    }
  }
  </script>
  
  <style scoped>
  .btn {
    margin: .4rem;
  }
  </style>
  