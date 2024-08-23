<template>
    <div class="product-container">
      <div v-if="product" class="product-details">
        <h1 class="product-title">{{ product?.productName }}</h1>
        <Card class="product-card">
          <template #cardHeader>
            <img :src="product.productUrl" :alt="product.productName" class="card-image">
          </template>
          <template #cardBody>
            <div class="card-content">
              <p class="card-quantity">Description: <span>{{ product.productDescription }}</span></p>
              <p class="card-quantity">Quantity: <span>{{ product.quantity }}</span></p>
              <p class="card-amount">Price: <span>R{{ product.amount }}</span></p>
              <div class="button-container">
                <router-link to="/products">
                  <button class="back-button">← Go Back</button>
                </router-link>
              </div>
            </div>
          </template>
        </Card>
      </div>
      <Spinner v-else />
    </div>
  </template>
    <script>
    import Card from '@/components/Card.vue';
    import Spinner from '@/components/Spinner.vue';
    export default {
      components: {
        Card,
        Spinner
      },
      computed: {
        product() {
          return this.$store.state.product; 
        }
      },
      mounted() {
        this.$store.dispatch("fetchProduct", this.$route.params.id); 
      }
    }
    </script>
    <style scoped>
    .product-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px;
      max-width: 700px;
      margin: 20px auto;
      font-family: 'Poppins', sans-serif;
    }
    .product-title {
      font-size: 2.5rem;
      color: #FF6F61;
      text-align: center;
      margin-bottom: 20px;
      text-shadow: 2px 2px 4px rgba(255, 111, 97, 0.3);
    }
    .product-card {
      background-color: #FFFFFF;
      border: none;
      overflow: hidden;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: transform 0.3s;
    }
    .product-card:hover {
      transform: translateY(-5px);
    }
    .card-image {
      width: 100%;
      max-width: 400px;
      height: auto;
      border-radius: 15px;
      margin-bottom: 20px;
      object-fit: cover;
    }
    .card-content {
      text-align: center;
      color: #333;
      font-size: 1.1rem;
    }
    .card-quantity,
    .card-amount {
      margin: 10px 0;
    }
    .card-quantity span,
    .card-amount span {
      color: #FF6F61;
      font-weight: bold;
    }
    .button-container {
      margin-top: 20px;
    }
    .back-button {
      background-color: #FF6F61;
      color: #fff;
      border: none;
      border-radius: 25px;
      padding: 10px 20px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s;
      box-shadow: 0 3px 6px rgba(255, 111, 97, 0.3);
    }
    .back-button:hover {
      background-color: #E55A4F;
      transform: scale(1.05);
    }
    @media only screen and (max-width: 600px) {
      .product-container {
        padding: 20px;
      }
      .product-title {
        font-size: 2rem;
      }
      .card-image {
        max-width: 100%;
      }
      .card-content {
        font-size: 1rem;
      }
      .back-button {
        padding: 8px 16px;
        font-size: 1rem;
      }
    }
    </style>