<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" id="title">Wired</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" aria-current="page" href="../views/HomeView.vue">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="../views/AboutView.vue">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Products</a></li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Admin</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Users</a></li>
                    <li><a class="dropdown-item" href="#">Products</a></li>
                </ul>
            </li>
            <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
            <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-person-fill"></i></a></li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<style scoped>
li {
    display: inline-block;
    margin: 0 10px;
}
a:hover{
    color: #5689b9;
}
</style>
