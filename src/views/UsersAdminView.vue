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
            <form id="addUserForm" @submit.prevent="saveUser">
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
              <div class="mb-3">
                <label for="userRole" class="form-label">Role</label>
                <input type="text" class="form-control" id="userRole" name="userRole" required>
              </div>
              <button type="submit" class="btn btn-primary">Save User</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.user_profile }}</td>
          <td>{{ user.firstname }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.user_age }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.user_role }}</td>
          <td>{{ user.email_add }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from '@/store';

export default {
  data() {
    return {
      users: [],
    };
  },
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
        user_profile: formData.get('userProfile'),
      };

      console.log(payload);

      store.dispatch('register', payload).then(() => {
        return fetch('http://localhost:8080/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      })
      .then(response => response.json())
      .then(data => {
        console.log('User saved successfully:', data);
        this.fetchUsers(); // Update user list after saving
      })
      .catch(error => {
        console.error('Error saving user:', error);
      });
    },
    fetchUsers() {
      fetch('http://localhost:8080/api/users')
        .then(response => response.json())
        .then(data => {
          this.users = data;
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
.btn {
  margin: 0.4rem;
}
</style>
