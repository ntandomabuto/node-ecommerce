<template>
    <div id="users">
      <h1>Users Table</h1>
      <div class="admin-container">
        <button id="adminSortUser" class="btn btn-secondary">Sort</button>
        <button id="adminAddUserBtn" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#adminAddUser">Add User</button>
      </div>
      <div class="modal fade" id="adminAddUser" tabindex="-1" aria-labelledby="adminAddUserLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="adminAddUserLabel">Add User</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="addUserForm">
                <div class="mb-3">
                  <label for="userFirstName" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="userFirstName" name="userFirstName" required>
                </div>
                <div class="mb-3">
                  <label for="userLastName" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="userLastName" name="userLastName" required>
                </div>
                <div class="mb-3">
                  <label for="userAge" class="form-label">Age</label>
                  <input type="number" class="form-control" id="userAge" name="userAge" required>
                </div>
                <div class="mb-3">
                  <label for="userGender" class="form-label">Gender</label>
                  <input type="text" class="form-control" id="userGender" name="userGender" required>
                </div>
                <div class="mb-3">
                  <label for="userEmail" class="form-label">Email Address</label>
                  <input type="email" class="form-control" id="userEmail" name="userEmail" required>
                </div>
                <div class="mb-3">
                  <label for="userPassword" class="form-label">Password</label>
                  <input type="password" class="form-control" id="userPassword" name="userPassword" required>
                </div>
                <div class="mb-3">
                  <label for="userProfile" class="form-label">Profile</label>
                  <input type="text" class="form-control" id="userProfile" name="userProfile" required>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="saveUser">Save User</button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- User Table -->
      <table id="userTable" class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody id="table-users">
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import store from '@/store';
  export default {
    methods: {
        saveUser() {
  console.log('Saving user...');
  const form = document.getElementById('addUserForm');

  const formData = new FormData(form);

  const payload = {
    firstname: formData.get('userFirstName'),
    lastname: formData.get('userLastName'),
    user_age: +formData.get('userAge'),
    gender: formData.get('userGender'),
    user_role: formData.get('userRole'),
    email_add: formData.get('userEmail'),
    user_pass: formData.get('userPassword'),
    user_profile: formData.get('userProfile')
    
      };

      console.log(payload);
      console.log(store);
      store.dispatch('register', payload )
      
      fetch('/user', {
        method: 'POST',
        body: payload
      })
      .then(response => response.json())
      .then(data => {
        console.log('User saved successfully:', data);
      })
      .catch(error => {
        console.error('Error saving user:', error);
      });
    },
    mounted() {
      const saveButton = document.getElementById('saveUser');
      if (saveButton) {
        saveButton.addEventListener('click', this.saveUser);
      }
    },
    beforeUnmount() {
      const saveButton = document.getElementById('saveUser');
      if (saveButton) {
        saveButton.removeEventListener('click', this.saveUser);
      }
    }
  }
}
  </script>
  
  <style scoped>
  .btn {
    margin: .4rem;
  }
  </style>