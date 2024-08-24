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
                <input type="text" class="form-control" id="userFirstName" name="userFirstName" v-model="firstname">
              </div>
              <div class="mb-3">
                <label for="userLastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="userLastName" name="userLastName" v-model="lastname">
              </div>
              <div class="mb-3">
                <label for="userAge" class="form-label">Age</label>
                <input type="number" class="form-control" id="userAge" name="userAge" v-model="user_age">
              </div>
              <div class="mb-3">
                <label for="userGender" class="form-label">Gender</label>
                <input type="text" class="form-control" id="userGender" name="userGender" v-model="gender">
              </div>
              <div class="mb-3">
                <label for="userEmail" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="userEmail" name="userEmail" v-model="email_add">
              </div>
             
              <div class="mb-3">
                <label for="userRole" class="form-label">Role</label>
                <input type="text" class="form-control" id="userRole" name="userRole" v-model="user_role">
              </div>
              <div class="mb-3">
                <label for="userPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="userPassword" name="userPassword" v-model="user_pass">
              </div>
              <div class="mb-3">
                <label for="userProfile" class="form-label">Profile</label>
                <input type="text" class="form-control" id="userProfile" name="userProfile" v-model="user_profile">
              </div>
              <button type="submit" class="btn btn-primary" @click="addUser(user.user_id)">Save User</button>
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
        <tr v-for="user in $store.state.user" :key="user.user_id">
          <td>{{ user.user_id }}</td>
          <td><img v-bind:src="user.user_profile" alt=""></td>
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
// import store from '@/store';

export default {
  data() {
    return {
      // users: [],
      firstname:'',
      lastname:'',
      user_age:'',
      gender:'',
      user_role:'',
      email_add:'',
      user__pass:'',
      user_profile:''
    };
  },
  methods: {
    // saveUser() {
    //   console.log('Saving user...');
    //   const form = document.getElementById('addUserForm');
    //   const formData = new FormData(form);

    //   const payload = {
    //     firstname: formData.get('userFirstName'),
    //     lastname: formData.get('userLastName'),
    //     user_age: +formData.get('userAge'),
    //     gender: formData.get('userGender'),
    //     user_role: formData.get('userRole'),
    //     email_add: formData.get('userEmail'),
    //     user_pass: formData.get('userPassword'),
    //     user_profile: formData.get('userProfile'),
    //   };

    //   console.log(payload);

    //   store.dispatch('register', payload).then(() => {
    //     return fetch('http://localhost:8080/api/users', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(payload),
    //     });
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('User saved successfully:', data);
    //     this.fetchUsers(); // Update user list after saving
    //   })
    //   .catch(error => {
    //     console.error('Error saving user:', error);
    //   });
    // },
    // fetchUsers() {
    //   fetch('http://localhost:8080/api/users')
    //     .then(response => response.json())
    //     .then(data => {
    //       this.users = data;
    //     })
    //     .catch(error => {
    //       console.error('Error fetching users:', error);
    //     });
    // }
    fetchUsers(){
      this.$store.dispatch('fetchUsers')
    },
    addUser(user_id){
      this.$store.dispatch('addUser',user_id)
    }
  },
  mounted() {
    this.fetchUsers()
  },
};
</script>

<style scoped>
.btn {
  margin: 0.4rem;
}
</style>
