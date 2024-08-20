<template>
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="navbar-brand" href="#" id="title">Wired</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">HOME</a></li>
        <li class="nav-item"><a class="nav-link" href="#">ABOUT</a></li>
        <li class="nav-item"><a class="nav-link" href="#">PRODUCTS</a></li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">ADMIN</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">USERS</a></li>
                <li><a class="dropdown-item" href="#">PRODUCTS</a></li>
            </ul>
        </li>
        <li class="nav-item"><a class="nav-link" href="#">CONTACT</a></li>
        <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-person-fill"></i></a></li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
li {
    display: inline-block;
    margin: 0 10px;
}
a:hover{
    color: #5689b9;
}
</style>
