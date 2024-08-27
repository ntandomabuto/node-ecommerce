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
                <input type="text" class="form-control" id="userFirstName" v-model="firstname" required>
              </div>
              <div class="mb-3">
                <label for="userLastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="userLastName" v-model="lastname" required>
              </div>
              <div class="mb-3">
                <label for="userAge" class="form-label">Age</label>
                <input type="number" class="form-control" id="userAge" v-model="user_age" required>
              </div>
              <div class="mb-3">
                <label for="userGender" class="form-label">Gender</label>
                <input type="text" class="form-control" id="userGender" v-model="gender" required>
              </div>
              <div class="mb-3">
                <label for="userEmail" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="userEmail" v-model="email_add" required>
              </div>
              <div class="mb-3">
                <label for="userPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="userPassword" v-model="user_pass" required>
              </div>
              <div class="mb-3">
                <label for="userProfile" class="form-label">Profile</label>
                <input type="text" class="form-control" id="userProfile" v-model="user_profile" required>
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
          <td><img v-bind:src="user.user_profile" alt="Profile Image" style="width: 50px; height: auto;"></td>
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
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      users: [],
      firstname: '',
      lastname: '',
      user_age: '',
      gender: '',
      user_role: '',
      email_add: '',
      user_pass: '',
      user_profile: ''
    };
  },
  methods: {
    ...mapActions(['register', 'fetchUsers']),
    
    async saveUser() {
      console.log('Saving user...');
      const payload = {
        firstname: this.firstname,
        lastname: this.lastname,
        user_age: +this.user_age,
        gender: this.gender,
        user_role: this.user_role,
        email_add: this.email_add,
        user_pass: this.user_pass,
        user_profile: this.user_profile
      };

      try {
        console.log(payload);
        await this.register(payload); 
        const response = await fetch('http://localhost:8080/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        const data = await response.json();
        console.log('User saved successfully:', data);
        this.fetchUsers();
      } catch (error) {
        console.error('Error saving user:', error);
      }
    }
  },
  async mounted() {
    await this.fetchUsers(); 
  }
};
</script>

<style scoped>
.btn {
  margin: 0.4rem;
}
</style>
