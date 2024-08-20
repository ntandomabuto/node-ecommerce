<template>
  <NavBar />
  <main>
    <router-view />
  </main>
  <Footer/>
</template>
<script>
import NavBar from './components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>
<style src="@/assets/css/style.css">
</style>



































/* import the fontawesome core */


/* import font awesome icon component */


/* import specific icons */
import { all } from '@awesome.me/kit-KIT_CODE/icons'

/* add icons to the library */
library.add(...all)