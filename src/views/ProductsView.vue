<template>
  <div class="container">
    <h2 class="product-title">Products</h2>
    <div class="row search-filter-container">
      <div class="filter-container">
        <input type="text" placeholder="Search Products" class="search-bar" v-model="searchQuery" />
        <select class="filter-dropdown" v-model="selectedCategory">
          <option value="" disabled selected>Select Category</option>
          <option value="all">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
        <select class="filter-dropdown" v-model="selectedFilter">
          <option value="" disabled selected>Select Sort</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="name">Name</option>
        </select>
      </div>
    </div>
    <div class="row gap-lg-5 justify-content-center" id="products">
      <Card v-for="product in filteredProducts" :key="product.id">
        <template v-slot:cardHeader>
          <div class="carousel-img-container">
            <img :src="product.prod_url" class="carousel-img" :alt="product.prod_name" loading="lazy">
            <div class="overlay">
              <div class="product-info">
                <p class="product-description">{{ product.description }}</p>
                <button class="btn view-product">
                  <router-link :to="`/products/${product.id}`" class="link-no-decoration">
                    View {{ product.category }}
                  </router-link>
                </button>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:cardBody>
          <h4 class="product-name">{{ product.prod_name }}</h4>
          <p class="product-price">R {{ product.amount }}</p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import store from '@/store';

export default {
  components: {
    Card,
  },
  data() {
    return {
      selectedFilter: 'priceAsc',
      selectedCategory: 'all', 
      searchQuery: '',
    };
  },
  computed: {
    products() {
      return store.state.products || [];
    },
    categories() {
      const categoriesSet = new Set(this.products.map(product => product.category));
      return Array.from(categoriesSet).sort();
    },
    filteredProducts() {
      let products = [...this.products].filter(product =>
        product.prod_name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      if (this.selectedCategory !== 'all') {
        products = products.filter(product => product.category === this.selectedCategory);
      }

      switch (this.selectedFilter) {
        case 'priceAsc':
          return products.sort((a, b) => a.amount - b.amount);
        case 'priceDesc':
          return products.sort((a, b) => b.amount - a.amount);
        case 'name':
          return products.sort((a, b) => a.prod_name.localeCompare(b.prod_name));
        default:
          return products;
      }
    },
  },
  mounted() {
    store.dispatch('fetchProducts').catch(error => {
      console.error('Error fetching products:', error);
    });
  },
};
</script>
<style scoped>
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.view-product {
    text-decoration: none;
    background: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 14px;
    color: #2c3e50;
    border-radius: 5px;
    transition: background 0.3s, color 0.3s;
  }
  
  .view-product:hover {
    background: #2c3e50;
    color: #fff;
  }
</style>
