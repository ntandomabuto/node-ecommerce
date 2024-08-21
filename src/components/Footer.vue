<template>
  <div class="container-fluid">
    <hr/>
    <div class="container">
            <a href="https://github.com/ntandomabuto/node-ecommerce.git"><i class="bi bi-github"></i></a>
            <a href="#"><i class="bi bi-linkedin"></i></a>
        <p>Wired &copy; {{ cYear }}</p>
    </div>
  </div>
</template>


<script>
export default  ({
    name: "FooterComp",
    data() {
        return {
            cYear: new Date().getUTCFullYear()
        }
    }
})
</script>


<style scoped>
/* .row {
    margin: 2rem;
} */
</style>