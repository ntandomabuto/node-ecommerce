<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="" id="title"><img src="https://erin-caitlin.github.io/nodeEOMP.images/images/Brand Logo.png" alt="logo" loading="lazy"></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/products">Products</router-link></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Admin</a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/useradmin">Users</router-link></li>
              <li><router-link class="dropdown-item" to="/productsadmin">Products</router-link></li>
            </ul>
          </li>
          <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
}
</script>

<style scoped>
img {
  width: 5rem;
  aspect-ratio: 1;
  object-fit: contain;
}

.navbar {
  background:#2c3e50;
}

.nav-link {
  color: #ffffff;
}

.navbar .nav-link:hover {
  color: #5689b9;
}

.navbar .dropdown-menu .dropdown-item:hover {
  background-color: #5689b9;
  color: #ffffff;
}
</style>