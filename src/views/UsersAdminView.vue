<template>
  <div id="users">
    <h1>Users Table</h1>
    <div class="admin-container">
      <!-- <button id="adminSortUser" class="btn btn-secondary">Sort</button> -->
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
                <label for="userPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="userPassword" name="userPassword" v-model="user_pass">
              </div>
              <button type="submit" class="btn btn-primary" @click="addUser()">Save User</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <table id="userTable" class="table table-striped">
      <thead>
        <tr>
          <!-- <th>ID</th> -->
          <th>Profile</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Role</th>
          <th>Email Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody id="table-users">
        <tr v-for="user in $store.state.user" :key="user.user_id">
          <!-- <td>{{ user.user_id }}</td> -->
          <td><img v-bind:src="user.user_profile" alt=""></td>
          <td>{{ user.firstname }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.user_age }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.user_role }}</td>
          <td>{{ user.email_add }}</td>
          <td>
            <button class="btn" @click="deleteUser(user.user_id)"><i class="fa-solid fa-trash"></i></button>  
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      firstname:'',
      lastname:'',
      user_age:'',
      gender:'',
      email_add:'',
      user_pass:''
    };
  },
  methods: {
    fetchUsers(){
      this.$store.dispatch('fetchUsers')
    },
    addUser(){
      this.$store.dispatch('addUser',this.$data)
    },
    deleteUser(user_id){
      this.$store.dispatch('deleteUser',user_id)
      console.log('delete successful');
      // location.reload()
      
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
img{
  width: 90px;
}
</style>
