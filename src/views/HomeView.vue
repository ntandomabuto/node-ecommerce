<template>
  <div class="container-fluid p-0 w-100">
    <div class="row align-items-center p-0" id="banner">
      <div class="col-md-6">
        <h1>Innovative Products That Enhance Your Life</h1>
        <button type="button"><router-link to="/products">SHOP NOW</router-link></button>
      </div>
      <div class="col-md-6">
        <img src="https://ntandomabuto.github.io/img/banner-image.png" alt="banner-image" loading="lazy" id="watch">
      </div>
    </div>
    <div class="row" id="services">
      <div class="col">
        <h5><i class="bi bi-cart3 icon-color"></i>FREE DELIVERY</h5>
        <p>Get free shipping on orders over R900. Shop now and save!</p>
      </div>
      <div class="col">
        <h5><i class="bi bi-award icon-color"></i>QUALITY GUARANTEE</h5>
        <p>Shop with confidence—our products meet the highest standards or your money back!</p>
      </div>
      <div class="col">
        <h5><i class="bi bi-tag icon-color"></i>DAILY OFFERS</h5>
        <p>New deals every day—discover fresh savings daily!</p>
      </div>
      <div class="col">
        <h5><i class="bi bi-shield-plus icon-color"></i> 100% SECURE PAYMENT</h5>
        <p>Enjoy peace of mind with fully protected and encrypted transactions on every purchase.</p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
#banner {
  margin: 0;
  padding: 0;
  background-color: #e2e7ec;
}

h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 70px;
  color: bla;
}

button {
  padding: .5rem;
  width: 15rem;
  background-color: black;
  color: white;
}

.icon-color {
  color: #7dabda;
}

#services {
  padding: 6rem;
  text-align: left;
  background-color: white;
}
p {
  color: #a0a6ac;
}

button a {
  text-decoration: none;
  color: white;
}
</style>
