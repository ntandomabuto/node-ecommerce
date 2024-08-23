<template>
  <div class="container-fluid p-3 text-center">
    <hr/>
    <a href="https://github.com/ntandomabuto/node-ecommerce.git" target="_blank"><i class="bi bi-github"></i></a>
    <a href="#" target="_blank"><i class="bi bi-linkedin"></i></a>
    <p>Wired &copy; {{ cYear }}</p>
  </div>
</template>

<script>
export default {
  name: "FooterComp",
  data() {
    return {
      cYear: new Date().getUTCFullYear()
    }
  }
}
</script>

<style scoped>
.container-fluid {
  padding: 0;
  margin: 0;
  width: 100%;
  background: linear-gradient(135deg,#2c3e50, #ecf0f1);
}

i {
  font-size: 1.2rem;
  margin-inline: .2rem;
}

p {
  margin: 0;
}
</style>
